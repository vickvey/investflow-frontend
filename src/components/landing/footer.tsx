import Link from 'next/link';
import { TrendingUp } from 'lucide-react';

export default function Footer() {
  return (
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
            href='http://github.com/vickvey/investflow-frontend/license'
            className='text-sm text-muted-foreground hover:text-primary transition-colors'
          >
            Terms
          </Link>
          <Link
            href='http://github.com/vickvey/investflow-frontend/license'
            className='text-sm text-muted-foreground hover:text-primary transition-colors'
          >
            Privacy
          </Link>
          <Link
            href='https://github.com/vickvey'
            className='text-sm text-muted-foreground hover:text-primary transition-colors'
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
