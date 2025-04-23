'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { DateRangePicker } from '@/components/ui/date-range-picker';

export function OptimizationSettingsCard() {
  const [optimizationModel, setOptimizationModel] = useState('meanVariance');
  const [returnModel, setReturnModel] = useState('historical');
  const [riskTolerance, setRiskTolerance] = useState(50);

  return (
    <Card title='Optimization Settings'>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <div>
          <label className='mb-1 block text-sm font-medium'>
            Optimization Model
          </label>
          <select
            value={optimizationModel}
            onChange={(e) => setOptimizationModel(e.target.value)}
            className='w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
          >
            <option value='meanVariance'>Mean-Variance</option>
            <option value='blackLitterman'>Black-Litterman</option>
            <option value='riskParity'>Risk Parity</option>
            <option value='minVariance'>Minimum Variance</option>
            <option value='maxSharpe'>Maximum Sharpe Ratio</option>
          </select>
        </div>

        <div>
          <label className='mb-1 block text-sm font-medium'>
            Expected Return Model
          </label>
          <select
            value={returnModel}
            onChange={(e) => setReturnModel(e.target.value)}
            className='w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
          >
            <option value='historical'>Historical Returns</option>
            <option value='capm'>CAPM</option>
            <option value='factorModel'>Factor Model</option>
            <option value='equalWeighted'>Equal Weighted</option>
          </select>
        </div>

        <div className='lg:col-span-2'>
          <label className='mb-1 block text-sm font-medium'>Time Period</label>
          <DateRangePicker />
        </div>
      </div>

      <div className='mt-4'>
        <label className='mb-1 block text-sm font-medium'>
          Risk Tolerance: {riskTolerance}%
        </label>
        <input
          type='range'
          min='0'
          max='100'
          value={riskTolerance}
          onChange={(e) => setRiskTolerance(Number.parseInt(e.target.value))}
          className='w-full'
        />
        <div className='flex justify-between text-xs text-muted-foreground'>
          <span>Conservative</span>
          <span>Balanced</span>
          <span>Aggressive</span>
        </div>
      </div>
    </Card>
  );
}
