"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { StockInput } from "@/components/ui/stock-input"
import { DateRangePicker } from "@/components/ui/date-range-picker"

// Mock performance metrics
const MOCK_PERFORMANCE = {
  AAPL: {
    returns: 32.5,
    alpha: 0.12,
    beta: 1.15,
    sharpeRatio: 1.87,
    volatility: 18.2,
    maxDrawdown: -15.3,
    winRate: 62.4,
  },
  MSFT: {
    returns: 28.7,
    alpha: 0.09,
    beta: 1.05,
    sharpeRatio: 1.65,
    volatility: 16.8,
    maxDrawdown: -12.7,
    winRate: 58.9,
  },
  GOOGL: {
    returns: 35.2,
    alpha: 0.14,
    beta: 1.22,
    sharpeRatio: 1.92,
    volatility: 20.1,
    maxDrawdown: -18.5,
    winRate: 64.3,
  },
}

export function StockPerformanceCard() {
  const [selectedStock, setSelectedStock] = useState("AAPL")
  const [dateRange, setDateRange] = useState({ start: new Date("2023-01-01"), end: new Date() })

  const performanceData = MOCK_PERFORMANCE[selectedStock as keyof typeof MOCK_PERFORMANCE] || MOCK_PERFORMANCE.AAPL

  return (
    <Card title="Stock Performance Analysis">
      <div className="mb-4 grid gap-4 md:grid-cols-2">
        <StockInput onSelect={setSelectedStock} placeholder="Enter stock ticker symbol..." />
        <DateRangePicker onSelect={setDateRange} />
      </div>

      <div className="mb-6">
        <h3 className="mb-2 text-lg font-semibold">Performance Analysis: {selectedStock}</h3>
        <p className="text-sm text-muted-foreground">
          {dateRange.start.toLocaleDateString()} to {dateRange.end.toLocaleDateString()}
        </p>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="relative h-64 w-full rounded-lg border bg-card p-4">
          <h4 className="mb-2 text-sm font-medium">Price History</h4>
          <Image
            src="/placeholder.svg?height=200&width=400"
            alt="Stock price chart"
            fill
            className="object-contain p-4"
          />
        </div>

        <div className="relative h-64 w-full rounded-lg border bg-card p-4">
          <h4 className="mb-2 text-sm font-medium">Volume Analysis</h4>
          <Image src="/placeholder.svg?height=200&width=400" alt="Volume chart" fill className="object-contain p-4" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
        <div className="rounded-lg bg-secondary/50 p-3 text-center">
          <div className="text-xs text-muted-foreground">Returns</div>
          <div className="text-lg font-semibold">{performanceData.returns}%</div>
        </div>

        <div className="rounded-lg bg-secondary/50 p-3 text-center">
          <div className="text-xs text-muted-foreground">Alpha</div>
          <div className="text-lg font-semibold">{performanceData.alpha}</div>
        </div>

        <div className="rounded-lg bg-secondary/50 p-3 text-center">
          <div className="text-xs text-muted-foreground">Beta</div>
          <div className="text-lg font-semibold">{performanceData.beta}</div>
        </div>

        <div className="rounded-lg bg-secondary/50 p-3 text-center">
          <div className="text-xs text-muted-foreground">Sharpe Ratio</div>
          <div className="text-lg font-semibold">{performanceData.sharpeRatio}</div>
        </div>

        <div className="rounded-lg bg-secondary/50 p-3 text-center">
          <div className="text-xs text-muted-foreground">Volatility</div>
          <div className="text-lg font-semibold">{performanceData.volatility}%</div>
        </div>

        <div className="rounded-lg bg-secondary/50 p-3 text-center">
          <div className="text-xs text-muted-foreground">Max Drawdown</div>
          <div className="text-lg font-semibold">{performanceData.maxDrawdown}%</div>
        </div>

        <div className="rounded-lg bg-secondary/50 p-3 text-center">
          <div className="text-xs text-muted-foreground">Win Rate</div>
          <div className="text-lg font-semibold">{performanceData.winRate}%</div>
        </div>
      </div>
    </Card>
  )
}
