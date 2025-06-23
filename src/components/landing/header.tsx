import Link from 'next/link';
import { TrendingUp } from 'lucide-react';
import { ToggleThemeMode } from '@/components/toggle-theme';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60'>
      <div className='container flex h-16 items-center justify-between'>
        {/* InvestFlow and Logo */}
        <div className='flex items-center gap-2'>
          <TrendingUp className='h-6 w-6 text-primary' />
          <span className='text-xl font-bold tracking-tight'>InvestFlow</span>
        </div>

        {/* Landing Page Navigation */}
        <nav className='hidden md:flex gap-6'>
          <Link
            href='#features'
            className='text-sm font-medium hover:text-primary transition-colors'
          >
            Features
          </Link>
          <Link
            href='#portfolio-theory'
            className='text-sm font-medium hover:text-primary transition-colors'
          >
            Portfolio Theory
          </Link>
          <Link
            href='#analysis'
            className='text-sm font-medium hover:text-primary transition-colors'
          >
            Stock Analysis
          </Link>
          <Link
            href='#testimonials'
            className='text-sm font-medium hover:text-primary transition-colors'
          >
            Testimonials
          </Link>
        </nav>

        {/* Signup and Login */}
        <div className='flex items-center gap-4'>
          <Link
            href='/login'
            className='text-sm hidden font-medium hover:text-primary transition-colors'
          >
            Log in
          </Link>

          <ToggleThemeMode />
          <Link href='/user'>
            <button className='px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 cursor-pointer transition-colors'>
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
