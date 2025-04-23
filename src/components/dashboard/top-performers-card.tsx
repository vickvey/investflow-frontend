'use client';

import { useState, useEffect } from 'react';
import { TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { apiUrl } from '@/lib/apiUrl';

interface Stock {
  symbol: string;
  name: string;
  change: number;
  changePercent: number;
}

export function TopPerformersCard() {
  const [index, setIndex] = useState<'NIFTY' | 'SENSEX'>('NIFTY');
  const [performers, setPerformers] = useState<Stock[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTopPerformers = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${apiUrl}/api/stock/top-performers?index=${index}`,
        );
        if (!response.ok) {
          throw new Error(
            `Failed to fetch top performers: ${response.statusText}`,
          );
        }
        const data = await response.json();
        setPerformers(data.performers);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchTopPerformers();
  }, [index]);

  return (
    <Card title='Top Performing Stocks' id='top-performing'>
      <div className='mb-4 flex gap-2'>
        <button
          onClick={() => setIndex('NIFTY')}
          className={`rounded-md px-3 py-1 text-sm font-medium ${
            index === 'NIFTY'
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary text-foreground hover:bg-secondary/80'
          }`}
        >
          NIFTY
        </button>
        <button
          onClick={() => setIndex('SENSEX')}
          className={`rounded-md px-3 py-1 text-sm font-medium ${
            index === 'SENSEX'
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary text-foreground hover:bg-secondary/80'
          }`}
        >
          SENSEX
        </button>
      </div>

      <div className='mb-2 flex items-center justify-between'>
        <h3 className='text-lg font-semibold'>
          Top {index} Performers (Last 12 Months)
        </h3>
      </div>

      {loading ? (
        <div className='text-center'>Loading...</div>
      ) : error ? (
        <div className='text-center text-red-500'>{error}</div>
      ) : (
        <div className='overflow-x-auto'>
          <table className='w-full'>
            <thead>
              <tr className='border-b text-left'>
                <th className='pb-2 text-sm font-medium'>Symbol</th>
                <th className='pb-2 text-sm font-medium'>Name</th>
                <th className='pb-2 text-right text-sm font-medium'>Change</th>
                <th className='pb-2 text-right text-sm font-medium'>
                  % Change
                </th>
              </tr>
            </thead>
            <tbody>
              {performers.map((stock) => (
                <tr key={stock.symbol} className='border-b last:border-0'>
                  <td className='py-3 font-medium'>{stock.symbol}</td>
                  <td className='py-3 text-sm text-muted-foreground'>
                    {stock.name}
                  </td>
                  <td className='py-3 text-right font-medium text-green-500'>
                    +${stock.change.toFixed(2)}
                  </td>
                  <td className='py-3 text-right'>
                    <div className='flex items-center justify-end text-green-500'>
                      <TrendingUp className='mr-1 h-4 w-4' />
                      <span className='font-medium'>
                        +{stock.changePercent.toFixed(2)}%
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  );
}
