import { Search } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { name: 'Top Stocks', href: '#' },
  { name: 'News', href: '#' },
  { name: 'Our Picks', href: '#' },
  { name: 'Contact', href: '#' },
];

export default function HomePage() {
  return (
    <div className='bg-[#ffffff] text-black min-h-screen min-w-[320px]'>
      {/* Header Section */}
      <header className='flex justify-between items-center bg-gray-100 px-4 py-3'>
        {/* Logo and Name */}
        <div className='flex items-center gap-4'>
          <div className='w-12 h-12 rounded-full bg-gray-300 cursor-pointer'></div>
          <h1 className='hidden lg:block font-semibold text-lg cursor-pointer'>
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
                className='hover:bg-gray-200 p-2 rounded-lg font-thin'
              >
                <li>{item.name}</li>
              </Link>
            ))}
          </ul>
        </nav>

        <div className='flex gap-4'>
          <button className='border-[1px] px-6 py-2 cursor-pointer rounded-lg border-gray-300 bg-[#ffffff] hover:shadow-2xl hover:bg-gray-300 transition-all font-bold'>
            Log in
          </button>
          <button className='border-[1px] px-6 py-2 cursor-pointer rounded-lg bg-[#1a5aff]  hover:bg-[#1a5aff]/80 transition-all font-bold text-white'>
            Sign up
          </button>
        </div>
      </header>

      {/* Main Section */}
      <main>
        {/* Hero Section */}
        <section className='py-24 flex flex-col items-center gap-10'>
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
      </main>
    </div>
  );
}
