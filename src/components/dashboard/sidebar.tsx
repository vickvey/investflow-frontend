'use client';

import type React from 'react';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  BarChart3,
  PieChart,
  Settings,
  HelpCircle,
  LogOut,
  Home,
  TrendingUp,
  Search,
  ChevronDown,
} from 'lucide-react';
import { cn } from '@/lib/utils';

type NavItem = {
  title: string;
  href: string;
  icon: React.ElementType;
  isActive?: boolean;
};

const mainNavItems: NavItem[] = [
  {
    title: 'Stock Information',
    href: '/user/#stock-information',
    icon: Home,
    isActive: true,
  },
  {
    title: 'Stock Performance Analysis',
    href: '/user/#performance-analysis',
    icon: BarChart3,
  },
  {
    title: 'Candlestick Chart Analysis',
    href: '/user/#candlestick-analysis',
    icon: PieChart,
  },
  {
    title: 'Stock Comparison',
    href: '/user/#stock-comparison',
    icon: Search,
  },
  {
    title: 'Top Performing Stocks',
    href: '/user/#top-performing',
    icon: TrendingUp,
  },
];

const otherNavItems: NavItem[] = [
  {
    title: 'Account Settings',
    href: '/dashboard/settings',
    icon: Settings,
  },
  {
    title: 'Help & Support',
    href: '/dashboard/help',
    icon: HelpCircle,
  },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={cn(
        'fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r bg-card transition-all duration-300 ease-in-out',
        !isOpen && 'w-20',
      )}
    >
      {/* Logo and toggle */}
      <div className='flex h-16 items-center justify-between border-b px-4'>
        <Link href='/user' className='flex items-center gap-2'>
          <TrendingUp className='h-6 w-6 text-primary' />
          {isOpen && <span className='text-xl font-bold'>InvestFlow</span>}
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='rounded-md p-1.5 text-muted-foreground hover:bg-secondary'
        >
          <ChevronDown
            className={cn(
              'h-5 w-5 transition-transform',
              !isOpen && '-rotate-90',
            )}
          />
        </button>
      </div>

      {/* User profile */}
      <div className='flex flex-col items-center border-b py-4'>
        <div className='relative h-12 w-12 overflow-hidden rounded-full'>
          <Image
            src='/placeholder.svg?height=100&width=100'
            alt='User profile'
            fill
            className='object-cover'
          />
        </div>
        {isOpen && (
          <div className='mt-2 text-center'>
            <p className='font-medium'>Alex Johnson</p>
            <p className='text-xs text-muted-foreground'>Premium Member</p>
          </div>
        )}
      </div>

      {/* Main navigation */}
      <div className='flex-1 overflow-auto py-4'>
        <nav className='space-y-1 px-2'>
          <div className='mb-4'>
            {isOpen && (
              <h3 className='mb-2 px-4 text-xs font-semibold uppercase text-muted-foreground'>
                Stock Analysis
              </h3>
            )}
            <ul className='space-y-1'>
              {mainNavItems.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors',
                      item.isActive
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground hover:bg-secondary hover:text-primary',
                      !isOpen && 'justify-center px-2',
                    )}
                  >
                    <item.icon
                      className={cn('h-5 w-5', !isOpen ? 'mr-0' : 'mr-2')}
                    />
                    {isOpen && <span>{item.title}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='mb-4'>
            {isOpen && (
              <h3 className='mb-2 px-4 text-xs font-semibold uppercase text-muted-foreground'>
                Other
              </h3>
            )}
            <ul className='space-y-1'>
              {otherNavItems.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors',
                      item.isActive
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground hover:bg-secondary hover:text-primary',
                      !isOpen && 'justify-center px-2',
                    )}
                  >
                    <item.icon
                      className={cn('h-5 w-5', !isOpen ? 'mr-0' : 'mr-2')}
                    />
                    {isOpen && <span>{item.title}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      {/* Logout */}
      <div className='border-t p-4'>
        <button
          className={cn(
            'flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary',
            !isOpen && 'justify-center px-2',
          )}
        >
          <LogOut className={cn('h-5 w-5', !isOpen ? 'mr-0' : 'mr-2')} />
          {isOpen && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
}
