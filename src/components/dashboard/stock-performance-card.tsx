'use client';
import { apiUrl } from '@/lib/apiUrl';
import { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import { Card } from '@/components/ui/card';
import { StockInput } from '@/components/ui/stock-input';
import { DateRangePicker } from '@/components/ui/date-range-picker';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
);

// Define interface for performance data
interface PerformanceData {
  returns: number;
  alpha: number;
  beta: number;
  sharpeRatio: number;
  volatility: number;
  maxDrawdown: number;
  winRate: number;
}

// Define interface for chart data
interface ChartData {
  priceHistory: { date: string; close: number }[];
  volumeHistory: { date: string; volume: number }[];
}

export function StockPerformanceCard() {
  const [selectedStock, setSelectedStock] = useState<string>('AAPL');
  const [dateRange, setDateRange] = useState<{ start: Date; end: Date }>({
    start: new Date('2024-01-01'),
    end: new Date('2024-04-22'), // Cap at current date
  });
  const [performanceData, setPerformanceData] =
    useState<PerformanceData | null>(null);
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPerformanceData = async () => {
      setLoading(true);
      setError(null);
      try {
        const startDate = dateRange.start.toISOString().split('T')[0];
        const endDate = dateRange.end.toISOString().split('T')[0];

        // Fetch performance metrics
        const performanceResponse = await fetch(
          `${apiUrl}/api/stock/${selectedStock}/performance?start=${startDate}&end=${endDate}`,
        );
        if (!performanceResponse.ok) {
          const errorText = await performanceResponse.text();
          throw new Error(
            `Failed to fetch performance data: ${performanceResponse.status} ${errorText}`,
          );
        }
        const performance: PerformanceData = await performanceResponse.json();

        // Fetch chart data
        const chartResponse = await fetch(
          `${apiUrl}/api/stock/${selectedStock}/history?start=${startDate}&end=${endDate}`,
        );
        if (!chartResponse.ok) {
          const errorText = await chartResponse.text();
          throw new Error(
            `Failed to fetch chart data: ${chartResponse.status} ${errorText}`,
          );
        }
        const chart: ChartData = await chartResponse.json();

        setPerformanceData(performance);
        setChartData(chart);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(
          err instanceof Error ? err.message : 'An unknown error occurred',
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPerformanceData();
  }, [selectedStock, dateRange]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !performanceData || !chartData) {
    return <div>Error: {error || 'No data available'}</div>;
  }

  // Price chart configuration
  const priceChartData = {
    labels: chartData.priceHistory.map((d) => d.date),
    datasets: [
      {
        label: 'Closing Price',
        data: chartData.priceHistory.map((d) => d.close),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const priceChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'time' as const,
        time: {
          unit: 'day',
        },
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Price ($)',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
  };

  // Volume chart configuration
  const volumeChartData = {
    labels: chartData.volumeHistory.map((d) => d.date),
    datasets: [
      {
        label: 'Volume',
        data: chartData.volumeHistory.map((d) => d.volume),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgb(153, 102, 255)',
        borderWidth: 1,
      },
    ],
  };

  const volumeChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'time' as const,
        time: {
          unit: 'day',
        },
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Volume (M)',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
  };

  return (
    <Card title='Stock Performance Analysis' id='performance-analysis'>
      <div className='mb-4 grid gap-4 md:grid-cols-2'>
        <StockInput
          onSelect={setSelectedStock}
          placeholder='Enter stock ticker symbol...'
        />
        <DateRangePicker onSelect={setDateRange} />
      </div>

      <div className='mb-6'>
        <h3 className='mb-2 text-lg font-semibold'>
          Performance Analysis: {selectedStock}
        </h3>
        <p className='text-sm text-muted-foreground'>
          {dateRange.start.toLocaleDateString()} to{' '}
          {dateRange.end.toLocaleDateString()}
        </p>
      </div>

      <div className='mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2'>
        <div className='relative h-64 w-full rounded-lg border bg-card p-4'>
          <h4 className='mb-2 text-sm font-medium'>Price History</h4>
          <div className='h-[200px]'>
            <Line data={priceChartData} options={priceChartOptions} />
          </div>
        </div>

        <div className='relative h-64 w-full rounded-lg border bg-card p-4'>
          <h4 className='mb-2 text-sm font-medium'>Volume Analysis</h4>
          <div className='h-[200px]'>
            <Bar data={volumeChartData} options={volumeChartOptions} />
          </div>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7'>
        <div className='rounded-lg bg-secondary/50 p-3 text-center'>
          <div className='text-xs text-muted-foreground'>Returns</div>
          <div className='text-lg font-semibold'>
            {performanceData.returns.toFixed(2)}%
          </div>
        </div>

        <div className='rounded-lg bg-secondary/50 p-3 text-center'>
          <div className='text-xs text-muted-foreground'>Alpha</div>
          <div className='text-lg font-semibold'>
            {performanceData.alpha.toFixed(2)}
          </div>
        </div>

        <div className='rounded-lg bg-secondary/50 p-3 text-center'>
          <div className='text-xs text-muted-foreground'>Beta</div>
          <div className='text-lg font-semibold'>
            {performanceData.beta.toFixed(2)}
          </div>
        </div>

        <div className='rounded-lg bg-secondary/50 p-3 text-center'>
          <div className='text-xs text-muted-foreground'>Sharpe Ratio</div>
          <div className='text-lg font-semibold'>
            {performanceData.sharpeRatio.toFixed(2)}
          </div>
        </div>

        <div className='rounded-lg bg-secondary/50 p-3 text-center'>
          <div className='text-xs text-muted-foreground'>Volatility</div>
          <div className='text-lg font-semibold'>
            {performanceData.volatility.toFixed(2)}%
          </div>
        </div>

        <div className='rounded-lg bg-secondary/50 p-3 text-center'>
          <div className='text-xs text-muted-foreground'>Max Drawdown</div>
          <div className='text-lg font-semibold'>
            {performanceData.maxDrawdown.toFixed(2)}%
          </div>
        </div>

        <div className='rounded-lg bg-secondary/50 p-3 text-center'>
          <div className='text-xs text-muted-foreground'>Win Rate</div>
          <div className='text-lg font-semibold'>
            {performanceData.winRate.toFixed(2)}%
          </div>
        </div>
      </div>
    </Card>
  );
}
