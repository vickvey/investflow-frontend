import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  BarChart3,
  PieChart,
  TrendingUp,
  LineChart,
  Clock,
  BarChart4,
  Percent,
  DollarSign,
  Target,
  Briefcase,
  ChevronRight,
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60'>
        <div className='container flex h-16 items-center justify-between'>
          {/* InvestFlow and Logo */}
          <div className='flex items-center gap-2'>
            <TrendingUp className='h-6 w-6 text-primary' />
            <span className='text-xl font-bold'>InvestFlow</span>
          </div>

          {/* Landing Page Navigation */}
          <nav className='hidden md:flex gap-6'>
            <Link
              href='#features'
              className='text-sm font-medium hover:text-primary'
            >
              Features
            </Link>
            <Link
              href='#portfolio-theory'
              className='text-sm font-medium hover:text-primary'
            >
              Portfolio Theory
            </Link>
            <Link
              href='#analysis'
              className='text-sm font-medium hover:text-primary'
            >
              Stock Analysis
            </Link>
            <Link
              href='#testimonials'
              className='text-sm font-medium hover:text-primary'
            >
              Testimonials
            </Link>
          </nav>

          {/* Signup and Login */}
          <div className='flex items-center gap-4'>
            <Link
              href='/login'
              className='text-sm font-medium hover:text-primary'
            >
              Log in
            </Link>

            <Link href='/signup'>
              <button className='px-4 py-2 bg-[#0073e6] text-white font-semibold rounded-lg shadow-md hover:bg-[#0073e6]/90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer transition-colors'>
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <main className='flex-1'>
        {/* Hero Section */}
        <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-linear-to-b from-background to-secondary/50'>
          <div className='container px-4 md:px-6'>
            <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] md:px-6'>
              <div className='flex flex-col justify-center space-y-4'>
                <div className='space-y-2'>
                  <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                    Data-Driven Stock Analysis & Portfolio Optimization
                  </h1>
                  <p className='max-w-[600px] text-muted-foreground md:text-xl'>
                    Make smarter investment decisions with comprehensive stock
                    analysis and portfolio allocation based on Modern Portfolio
                    Theory.
                  </p>
                </div>
                <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                  <Link href='/signup'>
                    <button className='px-6 py-3 bg-[#0073e6] text-white font-semibold rounded-lg shadow-md hover:bg-[#0073e6]/90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer flex items-center transition-colors'>
                      Get Started
                      <ArrowRight className='ml-2 h-4 w-4' />
                    </button>
                  </Link>
                  <Link href='#features'>
                    <button className='px-6 py-3 border-2 border-[#0073e6] text-[#0073e6] font-semibold rounded-lg shadow-md hover:bg-[#0073e6]/10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer transition-colors'>
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
              <div className='flex items-center justify-center'>
                <div className='relative w-full h-[300px] md:h-[400px] lg:h-[500px]'>
                  <Image
                    src='/placeholder.svg?height=500&width=600'
                    alt='Dashboard Preview showing stock analysis charts and portfolio allocation'
                    fill
                    className='object-contain'
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id='features'
          className='w-full py-12 md:py-24 lg:py-32 bg-accent'
        >
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground'>
                  Features
                </div>
                <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
                  Powerful Tools for Smarter Investing
                </h2>
                <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  InvestFlow combines detailed stock analysis with scientific
                  portfolio optimization to help you maximize returns while
                  managing risk.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
              <div className='flex flex-col justify-center space-y-4'>
                <div className='flex items-center space-x-2 rounded-lg bg-primary/10 p-2'>
                  <BarChart3 className='h-5 w-5 text-primary' />
                  <h3 className='text-xl font-bold'>
                    Comprehensive Stock Analysis
                  </h3>
                </div>
                <ul className='grid gap-6'>
                  <li>
                    <div className='grid gap-1'>
                      <h4 className='text-lg font-medium'>
                        Detailed Stock Information
                      </h4>
                      <p className='text-sm text-muted-foreground'>
                        Get comprehensive data on any stock including price
                        history, volume, market cap, P/E ratio, dividend yield,
                        and more.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='grid gap-1'>
                      <h4 className='text-lg font-medium'>
                        Performance Analysis
                      </h4>
                      <p className='text-sm text-muted-foreground'>
                        Analyze stock performance over custom time periods with
                        key metrics like alpha, beta, Sharpe ratio, and
                        volatility.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='grid gap-1'>
                      <h4 className='text-lg font-medium'>
                        Technical Indicators
                      </h4>
                      <p className='text-sm text-muted-foreground'>
                        Access moving averages, RSI, MACD, Bollinger Bands, and
                        other technical indicators to inform your trading
                        decisions.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='rounded-xl border bg-card p-2 shadow-xs'>
                <Image
                  src='/placeholder.svg?height=400&width=500'
                  width={500}
                  height={400}
                  alt='Stock Analysis Dashboard showing price charts and technical indicators'
                  className='rounded-lg object-cover'
                />
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
              <div className='order-last lg:order-first rounded-xl border bg-card p-2 shadow-xs'>
                <Image
                  src='/placeholder.svg?height=400&width=500'
                  width={500}
                  height={400}
                  alt='Portfolio Allocation interface showing asset allocation pie chart and efficient frontier'
                  className='rounded-lg object-cover'
                />
              </div>
              <div className='flex flex-col justify-center space-y-4'>
                <div className='flex items-center space-x-2 rounded-lg bg-primary/10 p-2'>
                  <PieChart className='h-5 w-5 text-primary' />
                  <h3 className='text-xl font-bold'>
                    Scientific Portfolio Allocation
                  </h3>
                </div>
                <ul className='grid gap-6'>
                  <li>
                    <div className='grid gap-1'>
                      <h4 className='text-lg font-medium'>
                        Modern Portfolio Theory
                      </h4>
                      <p className='text-sm text-muted-foreground'>
                        Optimize your portfolio based on the Nobel Prize-winning
                        Modern Portfolio Theory to maximize returns for a given
                        risk level.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='grid gap-1'>
                      <h4 className='text-lg font-medium'>
                        Risk-Return Analysis
                      </h4>
                      <p className='text-sm text-muted-foreground'>
                        Visualize the efficient frontier and understand the
                        risk-return tradeoffs of different portfolio
                        allocations.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='grid gap-1'>
                      <h4 className='text-lg font-medium'>
                        Budget-Based Optimization
                      </h4>
                      <p className='text-sm text-muted-foreground'>
                        Input your investment budget and get specific allocation
                        recommendations with projected performance metrics.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Modern Portfolio Theory Section */}
        <section
          id='portfolio-theory'
          className='w-full py-12 md:py-24 lg:py-32'
        >
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground'>
                  Modern Portfolio Theory
                </div>
                <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
                  Scientific Approach to Portfolio Management
                </h2>
                <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  InvestFlow leverages Modern Portfolio Theory to help you build
                  optimized investment portfolios.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3'>
              <div className='flex flex-col items-start space-y-3 rounded-lg border bg-card p-6 shadow-xs'>
                <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary/10'>
                  <Target className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-xl font-bold'>Efficient Frontier</h3>
                <p className='text-sm text-muted-foreground'>
                  Visualize the set of optimal portfolios that offer the highest
                  expected return for a defined level of risk, helping you make
                  better allocation decisions.
                </p>
              </div>
              <div className='flex flex-col items-start space-y-3 rounded-lg border bg-card p-6 shadow-xs'>
                <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary/10'>
                  <Percent className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-xl font-bold'>Risk Diversification</h3>
                <p className='text-sm text-muted-foreground'>
                  Reduce portfolio volatility through scientific diversification
                  across different assets with varying correlation coefficients.
                </p>
              </div>
              <div className='flex flex-col items-start space-y-3 rounded-lg border bg-card p-6 shadow-xs'>
                <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary/10'>
                  <BarChart4 className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-xl font-bold'>Performance Metrics</h3>
                <p className='text-sm text-muted-foreground'>
                  Evaluate portfolios using key metrics like Sharpe ratio,
                  Sortino ratio, maximum drawdown, and risk-adjusted returns.
                </p>
              </div>
            </div>
            <div className='mx-auto max-w-5xl rounded-xl border bg-card p-6 shadow-xs'>
              <div className='grid gap-6 lg:grid-cols-[2fr_3fr] items-center'>
                <div className='space-y-4'>
                  <h3 className='text-2xl font-bold'>
                    The Science Behind Our Approach
                  </h3>
                  <p className='text-muted-foreground'>
                    Modern Portfolio Theory, developed by Harry Markowitz in
                    1952, revolutionized how investors think about portfolio
                    construction. InvestFlow implements these principles to help
                    you:
                  </p>
                  <ul className='space-y-2'>
                    <li className='flex items-start gap-2'>
                      <ChevronRight className='mt-1 h-4 w-4 text-primary shrink-0' />
                      <span>Optimize the risk-return tradeoff</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <ChevronRight className='mt-1 h-4 w-4 text-primary shrink-0' />
                      <span>
                        Reduce portfolio volatility through diversification
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <ChevronRight className='mt-1 h-4 w-4 text-primary shrink-0' />
                      <span>
                        Maximize expected returns for your risk tolerance
                      </span>
                    </li>
                  </ul>
                </div>
                <div className='relative h-[250px] lg:h-[300px]'>
                  <Image
                    src='/placeholder.svg?height=300&width=500'
                    alt='Efficient Frontier curve showing risk-return tradeoff'
                    fill
                    className='object-contain rounded-lg'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stock Analysis Section */}
        <section
          id='analysis'
          className='w-full py-12 md:py-24 lg:py-32 bg-accent'
        >
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground'>
                  Stock Analysis
                </div>
                <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
                  Comprehensive Stock Analysis Tools
                </h2>
                <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Get detailed insights on any stock to make informed investment
                  decisions.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2'>
              <div className='rounded-xl border bg-card p-6 shadow-xs'>
                <div className='flex items-center gap-4 mb-4'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary/10'>
                    <Clock className='h-5 w-5 text-primary' />
                  </div>
                  <h3 className='text-xl font-bold'>Time Period Analysis</h3>
                </div>
                <p className='text-muted-foreground mb-4'>
                  Analyze stock performance over any time period, from days to
                  decades. Compare performance across different market
                  conditions.
                </p>
                <div className='relative h-[200px]'>
                  <Image
                    src='/placeholder.svg?height=200&width=400'
                    alt='Time period analysis chart showing stock performance'
                    fill
                    className='object-contain rounded-lg'
                  />
                </div>
              </div>
              <div className='rounded-xl border bg-card p-6 shadow-xs'>
                <div className='flex items-center gap-4 mb-4'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary/10'>
                    <LineChart className='h-5 w-5 text-primary' />
                  </div>
                  <h3 className='text-xl font-bold'>Technical Indicators</h3>
                </div>
                <p className='text-muted-foreground mb-4'>
                  Access a comprehensive suite of technical indicators to
                  identify trends, momentum, and potential entry/exit points.
                </p>
                <div className='relative h-[200px]'>
                  <Image
                    src='/placeholder.svg?height=200&width=400'
                    alt='Technical indicators chart showing MACD and RSI'
                    fill
                    className='object-contain rounded-lg'
                  />
                </div>
              </div>
              <div className='rounded-xl border bg-card p-6 shadow-xs'>
                <div className='flex items-center gap-4 mb-4'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary/10'>
                    <DollarSign className='h-5 w-5 text-primary' />
                  </div>
                  <h3 className='text-xl font-bold'>Fundamental Data</h3>
                </div>
                <p className='text-muted-foreground mb-4'>
                  Review key financial metrics, earnings reports, and valuation
                  ratios to assess a company's financial health and growth
                  potential.
                </p>
                <div className='relative h-[200px]'>
                  <Image
                    src='/placeholder.svg?height=200&width=400'
                    alt='Fundamental data dashboard showing financial metrics'
                    fill
                    className='object-contain rounded-lg'
                  />
                </div>
              </div>
              <div className='rounded-xl border bg-card p-6 shadow-xs'>
                <div className='flex items-center gap-4 mb-4'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary/10'>
                    <Briefcase className='h-5 w-5 text-primary' />
                  </div>
                  <h3 className='text-xl font-bold'>Comparative Analysis</h3>
                </div>
                <p className='text-muted-foreground mb-4'>
                  Compare multiple stocks side-by-side to identify the best
                  investment opportunities within a sector or across different
                  industries.
                </p>
                <div className='relative h-[200px]'>
                  <Image
                    src='/placeholder.svg?height=200&width=400'
                    alt='Comparative analysis chart showing multiple stocks'
                    fill
                    className='object-contain rounded-lg'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Preview Section */}
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground'>
                  User Dashboard
                </div>
                <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
                  Your Investment Command Center
                </h2>
                <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  A powerful, intuitive dashboard that puts all the information
                  you need at your fingertips.
                </p>
              </div>
            </div>
            <div className='mx-auto max-w-5xl py-12'>
              <div className='rounded-xl border bg-card p-4 shadow-xs'>
                <div className='relative h-[400px] md:h-[500px]'>
                  <Image
                    src='/placeholder.svg?height=500&width=1000'
                    alt='InvestFlow dashboard showing portfolio performance, stock analysis, and allocation tools'
                    fill
                    className='object-contain rounded-lg'
                  />
                </div>
              </div>
              <div className='grid gap-6 mt-8 md:grid-cols-3'>
                <div className='flex flex-col items-center space-y-2 text-center'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary/10'>
                    <BarChart3 className='h-6 w-6 text-primary' />
                  </div>
                  <h3 className='text-lg font-bold'>Performance Tracking</h3>
                  <p className='text-sm text-muted-foreground'>
                    Monitor your portfolio's performance with detailed metrics
                    and visualizations.
                  </p>
                </div>
                <div className='flex flex-col items-center space-y-2 text-center'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary/10'>
                    <PieChart className='h-6 w-6 text-primary' />
                  </div>
                  <h3 className='text-lg font-bold'>Allocation Tools</h3>
                  <p className='text-sm text-muted-foreground'>
                    Optimize your portfolio allocation with interactive tools
                    based on Modern Portfolio Theory.
                  </p>
                </div>
                <div className='flex flex-col items-center space-y-2 text-center'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary/10'>
                    <TrendingUp className='h-6 w-6 text-primary' />
                  </div>
                  <h3 className='text-lg font-bold'>Stock Analysis</h3>
                  <p className='text-sm text-muted-foreground'>
                    Access comprehensive stock analysis tools to evaluate
                    potential investments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id='testimonials'
          className='w-full py-12 md:py-24 lg:py-32 bg-accent'
        >
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground'>
                  Testimonials
                </div>
                <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
                  What our users say
                </h2>
                <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Hear from investors who have transformed their approach with
                  InvestFlow.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3'>
              <div className='flex flex-col justify-between space-y-4 rounded-lg border bg-card p-6 shadow-xs'>
                <div className='space-y-2'>
                  <div className='flex gap-1 text-yellow-400'>
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='h-4 w-4'
                      >
                        <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
                      </svg>
                    ))}
                  </div>
                  <p className='text-sm text-muted-foreground'>
                    "InvestFlow's portfolio allocation tools helped me optimize
                    my investments based on Modern Portfolio Theory. My returns
                    increased by 12% while reducing volatility."
                  </p>
                </div>
                <div className='flex items-center space-x-2'>
                  <div className='rounded-full bg-muted p-1'>
                    <div className='h-8 w-8 rounded-full bg-muted-foreground/20' />
                  </div>
                  <div>
                    <p className='text-sm font-medium'>Sarah Johnson</p>
                    <p className='text-xs text-muted-foreground'>
                      Retail Investor
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-between space-y-4 rounded-lg border bg-card p-6 shadow-xs'>
                <div className='space-y-2'>
                  <div className='flex gap-1 text-yellow-400'>
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='h-4 w-4'
                      >
                        <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
                      </svg>
                    ))}
                  </div>
                  <p className='text-sm text-muted-foreground'>
                    "The technical analysis tools are comprehensive and easy to
                    use. I can quickly evaluate stocks using multiple indicators
                    and make data-driven decisions."
                  </p>
                </div>
                <div className='flex items-center space-x-2'>
                  <div className='rounded-full bg-muted p-1'>
                    <div className='h-8 w-8 rounded-full bg-muted-foreground/20' />
                  </div>
                  <div>
                    <p className='text-sm font-medium'>Michael Chen</p>
                    <p className='text-xs text-muted-foreground'>Day Trader</p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-between space-y-4 rounded-lg border bg-card p-6 shadow-xs'>
                <div className='space-y-2'>
                  <div className='flex gap-1 text-yellow-400'>
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='h-4 w-4'
                      >
                        <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
                      </svg>
                    ))}
                  </div>
                  <p className='text-sm text-muted-foreground'>
                    "As a financial advisor, I use InvestFlow to demonstrate
                    portfolio optimization concepts to my clients. The
                    visualizations make complex theories accessible."
                  </p>
                </div>
                <div className='flex items-center space-x-2'>
                  <div className='rounded-full bg-muted p-1'>
                    <div className='h-8 w-8 rounded-full bg-muted-foreground/20' />
                  </div>
                  <div>
                    <p className='text-sm font-medium'>David Rodriguez</p>
                    <p className='text-xs text-muted-foreground'>
                      Financial Advisor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
                  Ready to optimize your investment strategy?
                </h2>
                <p className='max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Join thousands of investors who are making data-driven
                  decisions with InvestFlow.
                </p>
              </div>
              <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                <button>
                  <Link href='/signup'>
                    Start Your Free Trial{' '}
                    <ArrowRight className='ml-2 h-4 w-4' />
                  </Link>
                </button>
                <button className='bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20'>
                  <Link href='#features'>Learn More</Link>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className='w-full border-t py-6 bg-card'>
        <div className='container flex flex-col items-center justify-between gap-4 md:flex-row'>
          <div className='flex items-center gap-2'>
            <TrendingUp className='h-6 w-6 text-primary' />
            <span className='text-lg font-bold'>InvestFlow</span>
          </div>
          <p className='text-center text-sm text-muted-foreground md:text-left'>
            &copy; {new Date().getFullYear()} InvestFlow. All rights reserved.
          </p>
          <div className='flex gap-4'>
            <Link
              href='#'
              className='text-sm text-muted-foreground hover:text-primary'
            >
              Terms
            </Link>
            <Link
              href='#'
              className='text-sm text-muted-foreground hover:text-primary'
            >
              Privacy
            </Link>
            <Link
              href='#'
              className='text-sm text-muted-foreground hover:text-primary'
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
