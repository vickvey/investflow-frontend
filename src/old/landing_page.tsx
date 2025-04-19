import { Search } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { name: 'Top Stocks', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'How It Works', href: '#' },
  { name: 'About Us', href: '#' },
];

export default function HomePage() {
  return (
    <div className='bg-[#ffffff] text-black min-h-screen min-w-[320px] flex flex-col'>
      {/* Header Section */}
      <header className='sticky top-0 z-50 w-full backdrop:blur supports-[backdrop-filter]:bg-gray-50/95 flex justify-between items-center px-4 py-3 border-b border-gray-500'>
        {/* Logo and Name */}
        <div className='flex items-center gap-4'>
          <div className='w-12 h-12 rounded-full bg-gray-300 cursor-pointer'></div>
          <h1 className='hidden lg:block font-thin font-serif text-2xl cursor-pointer'>
            InvestFlow
          </h1>
        </div>

        {/* Middle Navigation Items */}
        <nav className='hidden md:block'>
          <ul className='flex gap-4'>
            {navItems.map((item, idx) => (
              <Link
                href={item.href}
                key={idx}
                className='hover:bg-gray-200 p-2 rounded-lg font-extralight'
              >
                <li>{item.name}</li>
              </Link>
            ))}
          </ul>
        </nav>

        <div className='flex gap-4'>
          <button className='px-6 py-2 cursor-pointer rounded-lg border-gray-200 bg-[#ffffff] hover:shadow-2xl hover:bg-gray-300 transition-all font-bold ring-1'>
            Log in
          </button>
          <button className='px-6 py-2 cursor-pointer rounded-lg bg-[#1a5aff]  hover:bg-[#1a5aff]/80 transition-all font-bold text-white'>
            Sign up
          </button>
        </div>
      </header>

      {/* Main Section */}
      <main className=''>
        {/* Hero Section */}

        <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white'>
          <div className='container px-4 md:px-6'>
            <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
              <div className='flex flex-col justify-center space-y-4'>
                <div className='space-y-2'>
                  <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                    Smart Stock Analysis & Portfolio Optimization
                  </h1>
                  <p className='max-w-[600px] text-muted-foreground md:text-xl'>
                    Make data-driven investment decisions with powerful stock
                    analysis and AI-powered portfolio allocation.
                  </p>
                </div>
                <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                  <button>Get Started</button>
                  <button>Learn More</button>
                </div>
              </div>
              <div className='flex items-center justify-center'>
                <div className='relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg bg-gray-100'></div>
              </div>
            </div>
          </div>
        </section>

        <section className='py-24 flex flex-col items-center gap-10 bg-blue-50'>
          {/* Main Info Line */}
          <div className='flex flex-col items-center gap-2'>
            <p className='text-5xl font-bold'>Make Better Investment</p>
            <p className='text-5xl font-bold'>
              Decisions with Alternative Data
            </p>
          </div>

          {/* Secondary Info Line */}
          <div className='flex flex-col items-center'>
            <p className='text-gray-500'>
              Get the inside scoop on companies like never before.
            </p>
            <p className='text-gray-500'>
              Complement your due diligence with AltIndex.
            </p>
          </div>

          {/* Stock Search Bar */}
          <div className='flex justify-center items-center border-[1px] border-gray-300 rounded-lg'>
            <Search className='ml-4' />
            <input
              type='text'
              className='py-4 px-2 mr-20 rounded-lg'
              placeholder='Search Stocks & Crypto'
            />
            <button className='px-8 py-4 cursor-pointer rounded-lg bg-[#1a5aff]  hover:bg-[#1a5aff]/80 font-bold text-white'>
              Search
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className='px-18 py-4 flex flex-col gap-4'>
          <h1 className='text-3xl font-thin font-serif'>Features</h1>
          <div className='flex flex-wrap gap-6'>
            <section className='h-64 w-64 rounded-lg ring-1 shadow-lg bg-gray-100'></section>
            <section className='h-64 w-64 rounded-lg ring-1 shadow-lg bg-gray-100'></section>
            <section className='h-64 w-64 rounded-lg ring-1 shadow-lg bg-gray-100'></section>
            <section className='h-64 w-64 rounded-lg ring-1 shadow-lg bg-gray-100'></section>
            <section className='h-64 w-64 rounded-lg ring-1 shadow-lg bg-gray-100'></section>
            <section className='h-64 w-64 rounded-lg ring-1 shadow-lg bg-gray-100'></section>
          </div>
        </section>
      </main>
    </div>
  );
}
