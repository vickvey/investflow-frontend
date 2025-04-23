'use client';

import { useState, useEffect } from 'react';
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  BarChart3,
  Activity,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { StockInput } from '@/components/ui/stock-input';
import { apiUrl } from '@/lib/apiUrl';

// Define interface for stock data
interface StockData {
  ticker: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  marketCap: number | string;
  peRatio: number | string;
  dividend: number;
  volume: number;
  avgVolume: number | string;
  high: number;
  low: number;
  open: number;
  prevClose: number;
}

export function StockInfoCard() {
  const [selectedStock, setSelectedStock] = useState<string>('AAPL');
  const [stockData, setStockData] = useState<StockData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStockData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${apiUrl}/api/stock/${selectedStock}/info`,
        );
        if (!response.ok) {
          throw new Error('Failed to fetch stock data');
        }
        const data: StockData = await response.json();
        setStockData(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'An unknown error occurred',
        );
      } finally {
        setLoading(false);
      }
    };

    fetchStockData();
  }, [selectedStock]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !stockData) {
    return <div>Error: {error || 'No data available'}</div>;
  }

  return (
    <Card title='Stock Information' id='stock-information'>
      <div className='mb-4'>
        <StockInput
          onSelect={setSelectedStock}
          placeholder='Enter stock ticker symbol...'
        />
      </div>

      <div className='mb-6 flex items-end gap-4'>
        <h2 className='text-3xl font-bold'>${stockData.price.toFixed(2)}</h2>
        <div
          className={`flex items-center ${
            stockData.change >= 0 ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {stockData.change >= 0 ? (
            <TrendingUp className='mr-1 h-4 w-4' />
          ) : (
            <TrendingDown className='mr-1 h-4 w-4' />
          )}
          <span className='font-medium'>
            {stockData.change >= 0 ? '+' : ''}
            {stockData.change.toFixed(2)} ({stockData.change >= 0 ? '+' : ''}
            {stockData.changePercent.toFixed(2)}%)
          </span>
        </div>
      </div>

      <div className='mb-4'>
        <h3 className='mb-2 text-lg font-semibold'>
          {stockData.name} ({selectedStock})
        </h3>
      </div>

      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        <div className='rounded-lg bg-secondary/50 p-3'>
          <div className='mb-1 flex items-center text-sm text-muted-foreground'>
            <DollarSign className='mr-1 h-4 w-4' />
            <span>Market Cap</span>
          </div>
          <div className='text-lg font-semibold'>
            {typeof stockData.marketCap === 'number'
              ? `$${stockData.marketCap.toFixed(2)}B`
              : stockData.marketCap}
          </div>
        </div>

        <div className='rounded-lg bg-secondary/50 p-3'>
          <div className='mb-1 flex items-center text-sm text-muted-foreground'>
            <BarChart3 className='mr-1 h-4 w-4' />
            <span>P/E Ratio</span>
          </div>
          <div className='text-lg font-semibold'>
            {typeof stockData.peRatio === 'number'
              ? stockData.peRatio.toFixed(2)
              : stockData.peRatio}
          </div>
        </div>

        <div className='rounded-lg bg-secondary/50 p-3'>
          <div className='mb-1 flex items-center text-sm text-muted-foreground'>
            <Activity className='mr-1 h-4 w-4' />
            <span>Volume</span>
          </div>
          <div className='text-lg font-semibold'>
            {stockData.volume.toFixed(2)}M
          </div>
        </div>

        <div className='rounded-lg bg-secondary/50 p-3'>
          <div className='mb-1 flex items-center text-sm text-muted-foreground'>
            <TrendingUp className='mr-1 h-4 w-4' />
            <span>Dividend Yield</span>
          </div>
          <div className='text-lg font-semibold'>
            {stockData.dividend.toFixed(2)}%
          </div>
        </div>
      </div>

      <div className='mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4'>
        <div>
          <div className='text-xs text-muted-foreground'>Open</div>
          <div className='font-medium'>${stockData.open.toFixed(2)}</div>
        </div>
        <div>
          <div className='text-xs text-muted-foreground'>Previous Close</div>
          <div className='font-medium'>${stockData.prevClose.toFixed(2)}</div>
        </div>
        <div>
          <div className='text-xs text-muted-foreground'>Day&apos;s High</div>
          <div className='font-medium'>${stockData.high.toFixed(2)}</div>
        </div>
        <div>
          <div className='text-xs text-muted-foreground'>Day&apos;s Low</div>
          <div className='font-medium'>${stockData.low.toFixed(2)}</div>
        </div>
      </div>
    </Card>
  );
}
