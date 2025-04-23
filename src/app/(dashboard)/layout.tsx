import type React from 'react';
import type { Metadata } from 'next';
import { Sidebar } from '@/components/dashboard/sidebar';
import { Bell, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'InvestFlow Dashboard - Smart Stock Analysis & Portfolio Optimization',
  description:
    'Manage your investments with data-driven analysis and portfolio optimization',
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex min-h-screen bg-background'>
      {/* LEFT SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className='flex-1 max-lg:pl-18 pl-64'>
        {/* <div className='flex-1 pl-64'> */}
        <header className='sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background/95 px-6 backdrop-blur supports-backdrop-blur:bg-background/60'>
          <div className='flex items-center gap-2'>
            <h1 className='text-xl font-semibold'>Dashboard</h1>
          </div>
          <div className='flex items-center gap-4'>
            <button className='rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-foreground'>
              <Bell className='h-5 w-5' />
            </button>
            <button className='rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-foreground'>
              <User className='h-5 w-5' />
            </button>
          </div>
        </header>
        <main className='px-6'>{children}</main>
      </div>
    </div>
  );
}
