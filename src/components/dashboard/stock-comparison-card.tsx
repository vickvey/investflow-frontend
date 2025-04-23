'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { StockInput } from '@/components/ui/stock-input';
import { Line } from 'react-chartjs-2';
import { apiUrl } from '@/lib/apiUrl';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

interface StockMetrics {
  returns: number;
  volatility: number;
  peRatio: number;
  marketCap: number;
}

interface ComparisonData {
  stock1: { ticker: string; metrics: StockMetrics };
  stock2: { ticker: string; metrics: StockMetrics };
  priceHistory: {
    stock1: { date: string; close: number }[];
    stock2: { date: string; close: number }[];
  };
}

export function StockComparisonCard() {
  const [stock1, setStock1] = useState('AAPL');
  const [stock2, setStock2] = useState('GOOGL');
  const [comparisonData, setComparisonData] = useState<ComparisonData | null>(
    null,
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchComparisonData = async () => {
      if (!stock1 || !stock2) return;
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${apiUrl}/api/stock/compare?stock1=${stock1}&stock2=${stock2}`,
        );
        if (!response.ok) throw new Error('Failed to fetch comparison data');
        const data: ComparisonData = await response.json();
        setComparisonData(data);
      } catch (err) {
        setError('Error fetching comparison data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchComparisonData();
  }, [stock1, stock2]);

  // Prepare chart data for Price Performance
  const priceChartData = {
    labels: comparisonData?.priceHistory.stock1.map((d) => d.date) || [],
    datasets: [
      {
        label: stock1,
        data: comparisonData?.priceHistory.stock1.map((d) => d.close) || [],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1,
      },
      {
        label: stock2,
        data: comparisonData?.priceHistory.stock2.map((d) => d.close) || [],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.1,
      },
    ],
  };

  // Prepare chart data for Relative Strength (stock1/stock2 ratio)
  const relativeStrengthData = {
    labels: comparisonData?.priceHistory.stock1.map((d) => d.date) || [],
    datasets: [
      {
        label: `${stock1}/${stock2} Ratio`,
        data:
          comparisonData?.priceHistory.stock1.map((d, i) => {
            const stock2Price = comparisonData.priceHistory.stock2[i]?.close;
            return stock2Price ? d.close / stock2Price : 0;
          }) || [],
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: false },
    },
    scales: {
      x: { display: true, title: { display: true, text: 'Date' } },
      y: { display: true, title: { display: true, text: 'Price (USD)' } },
    },
  };

  const relativeChartOptions = {
    ...chartOptions,
    scales: {
      x: { display: true, title: { display: true, text: 'Date' } },
      y: { display: true, title: { display: true, text: 'Price Ratio' } },
    },
  };

  return (
    <Card title='Stock Comparison' id='stock-comparison'>
      <div className='mb-4 grid gap-4 md:grid-cols-2'>
        <div>
          <label className='mb-1 block text-sm font-medium'>First Stock</label>
          <StockInput onSelect={setStock1} placeholder='Enter first stock...' />
        </div>
        <div>
          <label className='mb-1 block text-sm font-medium'>Second Stock</label>
          <StockInput
            onSelect={setStock2}
            placeholder='Enter second stock...'
          />
        </div>
      </div>

      {loading && <p className='text-center'>Loading...</p>}
      {error && <p className='text-center text-red-500'>{error}</p>}

      {comparisonData && (
        <>
          <div className='mb-6'>
            <h3 className='mb-2 text-lg font-semibold'>
              Comparing {stock1} vs {stock2}
            </h3>
            <p className='text-sm text-muted-foreground'>
              Last 12 months performance comparison
            </p>
          </div>

          <div className='mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2'>
            <div className='relative h-64 w-full rounded-lg border bg-card p-4'>
              <h4 className='mb-2 text-sm font-medium'>Price Performance</h4>
              <div className='h-[200px]'>
                <Line data={priceChartData} options={chartOptions} />
              </div>
            </div>

            <div className='relative h-64 w-full rounded-lg border bg-card p-4'>
              <h4 className='mb-2 text-sm font-medium'>Relative Strength</h4>
              <div className='h-[200px]'>
                <Line
                  data={relativeStrengthData}
                  options={relativeChartOptions}
                />
              </div>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-4 sm:grid-cols-4'>
            <div className='rounded-lg bg-secondary/50 p-3'>
              <div className='text-xs text-muted-foreground'>Returns (1Y)</div>
              <div className='flex items-center justify-between'>
                <div className='text-sm font-medium'>{stock1}</div>
                <div className='text-lg font-semibold'>
                  {comparisonData.stock1.metrics.returns.toFixed(2)}%
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <div className='text-sm font-medium'>{stock2}</div>
                <div className='text-lg font-semibold'>
                  {comparisonData.stock2.metrics.returns.toFixed(2)}%
                </div>
              </div>
            </div>

            <div className='rounded-lg bg-secondary/50 p-3'>
              <div className='text-xs text-muted-foreground'>Volatility</div>
              <div className='flex items-center justify-between'>
                <div className='text-sm font-medium'>{stock1}</div>
                <div className='text-lg font-semibold'>
                  {comparisonData.stock1.metrics.volatility.toFixed(2)}%
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <div className='text-sm font-medium'>{stock2}</div>
                <div className='text-lg font-semibold'>
                  {comparisonData.stock2.metrics.volatility.toFixed(2)}%
                </div>
              </div>
            </div>

            <div className='rounded-lg bg-secondary/50 p-3'>
              <div className='text-xs text-muted-foreground'>P/E Ratio</div>
              <div className='flex items-center justify-between'>
                <div className='text-sm font-medium'>{stock1}</div>
                <div className='text-lg font-semibold'>
                  {comparisonData.stock1.metrics.peRatio.toFixed(2)}
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <div className='text-sm font-medium'>{stock2}</div>
                <div className='text-lg font-semibold'>
                  {comparisonData.stock2.metrics.peRatio.toFixed(2)}
                </div>
              </div>
            </div>

            <div className='rounded-lg bg-secondary/50 p-3'>
              <div className='text-xs text-muted-foreground'>
                Market Cap (T)
              </div>
              <div className='flex items-center justify-between'>
                <div className='text-sm font-medium'>{stock1}</div>
                <div className='text-lg font-semibold'>
                  ${comparisonData.stock1.metrics.marketCap.toFixed(2)}T
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <div className='text-sm font-medium'>{stock2}</div>
                <div className='text-lg font-semibold'>
                  ${comparisonData.stock2.metrics.marketCap.toFixed(2)}T
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Card>
  );
}
