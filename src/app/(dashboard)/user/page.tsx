import { StockInfoCard } from '@/components/dashboard/stock-info-card';
import { StockPerformanceCard } from '@/components/dashboard/stock-performance-card';
import { StockComparisonCard } from '@/components/dashboard/stock-comparison-card';
import { TopPerformersCard } from '@/components/dashboard/top-performers-card';
import { PortfolioInfoCard } from '@/components/dashboard/portfolio-info-card';
import { OptimizationSettingsCard } from '@/components/dashboard/optimization-settings-card';
import { PortfolioOptimizerCard } from '@/components/dashboard/portfolio-optimizer-card';
import { CandlestickChartCard } from '@/components/dashboard/candlestick-chart-card';

export default function UserDashboard() {
  return (
    <div className='space-y-8'>
      <section id='stocks-analysis'>
        <h2 className='mb-6 text-2xl font-bold'>Stock Analysis</h2>
        <div className='grid gap-6'>
          <StockInfoCard />
          <StockPerformanceCard />
          <CandlestickChartCard />
          <StockComparisonCard />
          <TopPerformersCard />
        </div>
      </section>

      <section id='portfolio-optimization'>
        <h2 className='mb-6 text-2xl font-bold'>Portfolio Optimization</h2>
        <div className='grid gap-6'>
          <PortfolioInfoCard />
          <OptimizationSettingsCard />
          <PortfolioOptimizerCard />
        </div>
      </section>
    </div>
  );
}
