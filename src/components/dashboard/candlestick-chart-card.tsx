'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { StockInput } from '@/components/ui/stock-input';
import { DateRangePicker } from '@/components/ui/date-range-picker';
import { CandlestickChart } from './candlestick-chart';
import { Info } from 'lucide-react';

export function CandlestickChartCard() {
  const [selectedStock, setSelectedStock] = useState<string>('AAPL');
  const [dateRange, setDateRange] = useState<{ start: Date; end: Date }>({
    start: new Date('2024-01-01'),
    end: new Date(), // Current date
  });

  return (
    <Card title='Candlestick Chart Analysis' id='candlestick-analysis'>
      <div className='mb-4 grid gap-4 md:grid-cols-2'>
        <StockInput
          onSelect={setSelectedStock}
          placeholder='Enter stock ticker symbol...'
        />
        <DateRangePicker onSelect={setDateRange} />
      </div>

      <div className='mb-6'>
        <h3 className='mb-2 text-lg font-semibold'>
          Candlestick Analysis: {selectedStock}
        </h3>
        <p className='text-sm text-muted-foreground'>
          {dateRange.start.toLocaleDateString()} to{' '}
          {dateRange.end.toLocaleDateString()}
        </p>
      </div>

      <div className='mb-6 rounded-lg border bg-card p-4'>
        <div className='mb-2 flex items-center justify-between'>
          <h4 className='text-sm font-medium'>Price Action</h4>
          <div className='flex items-center text-xs text-muted-foreground'>
            <Info className='mr-1 h-4 w-4' />
            <span>Green: Bullish, Red: Bearish</span>
          </div>
        </div>
        <div className='h-[400px]'>
          <CandlestickChart
            ticker={selectedStock}
            dateRange={dateRange}
            height={350}
          />
        </div>
      </div>

      <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
        <div className='rounded-lg bg-secondary/50 p-3'>
          <div className='text-xs text-muted-foreground'>
            Pattern Recognition
          </div>
          <div className='mt-1 text-sm'>
            <ul className='space-y-1'>
              <li className='flex items-center'>
                <span className='mr-2 h-2 w-2 rounded-full bg-green-500'></span>
                <span>Bullish Engulfing (Apr 15)</span>
              </li>
              <li className='flex items-center'>
                <span className='mr-2 h-2 w-2 rounded-full bg-red-500'></span>
                <span>Bearish Harami (Apr 10)</span>
              </li>
              <li className='flex items-center'>
                <span className='mr-2 h-2 w-2 rounded-full bg-green-500'></span>
                <span>Morning Star (Apr 5)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className='rounded-lg bg-secondary/50 p-3'>
          <div className='text-xs text-muted-foreground'>
            Support & Resistance
          </div>
          <div className='mt-1 text-sm'>
            <div className='mb-1 flex justify-between'>
              <span>Strong Resistance:</span>
              <span className='font-medium'>$185.25</span>
            </div>
            <div className='mb-1 flex justify-between'>
              <span>Resistance:</span>
              <span className='font-medium'>$182.70</span>
            </div>
            <div className='mb-1 flex justify-between'>
              <span>Support:</span>
              <span className='font-medium'>$178.35</span>
            </div>
            <div className='flex justify-between'>
              <span>Strong Support:</span>
              <span className='font-medium'>$175.80</span>
            </div>
          </div>
        </div>

        <div className='rounded-lg bg-secondary/50 p-3'>
          <div className='text-xs text-muted-foreground'>Volume Analysis</div>
          <div className='mt-1 text-sm'>
            <div className='mb-1 flex justify-between'>
              <span>Avg Volume (30d):</span>
              <span className='font-medium'>58.7M</span>
            </div>
            <div className='mb-1 flex justify-between'>
              <span>Volume Trend:</span>
              <span className='font-medium text-green-500'>Increasing</span>
            </div>
            <div className='mb-1 flex justify-between'>
              <span>Volume/Price Divergence:</span>
              <span className='font-medium'>None</span>
            </div>
            <div className='flex justify-between'>
              <span>Unusual Activity:</span>
              <span className='font-medium'>No</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
