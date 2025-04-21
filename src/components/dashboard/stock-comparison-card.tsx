"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { StockInput } from "@/components/ui/stock-input"

// Mock comparison data
const MOCK_COMPARISON = {
  returns: {
    AAPL: 32.5,
    MSFT: 28.7,
    GOOGL: 35.2,
    AMZN: 27.8,
    META: 41.3,
  },
  volatility: {
    AAPL: 18.2,
    MSFT: 16.8,
    GOOGL: 20.1,
    AMZN: 22.4,
    META: 25.7,
  },
  peRatio: {
    AAPL: 30.21,
    MSFT: 36.15,
    GOOGL: 25.12,
    AMZN: 42.78,
    META: 28.35,
  },
  marketCap: {
    AAPL: 2.87,
    MSFT: 3.11,
    GOOGL: 2.05,
    AMZN: 1.78,
    META: 1.23,
  },
}

export function StockComparisonCard() {
  const [stock1, setStock1] = useState("AAPL")
  const [stock2, setStock2] = useState("MSFT")

  return (
    <Card title="Stock Comparison">
      <div className="mb-4 grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium">First Stock</label>
          <StockInput onSelect={setStock1} placeholder="Enter first stock..." />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Second Stock</label>
          <StockInput onSelect={setStock2} placeholder="Enter second stock..." />
        </div>
      </div>

      <div className="mb-6">
        <h3 className="mb-2 text-lg font-semibold">
          Comparing {stock1} vs {stock2}
        </h3>
        <p className="text-sm text-muted-foreground">Last 12 months performance comparison</p>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="relative h-64 w-full rounded-lg border bg-card p-4">
          <h4 className="mb-2 text-sm font-medium">Price Performance</h4>
          <Image
            src="/placeholder.svg?height=200&width=400"
            alt="Stock comparison chart"
            fill
            className="object-contain p-4"
          />
        </div>

        <div className="relative h-64 w-full rounded-lg border bg-card p-4">
          <h4 className="mb-2 text-sm font-medium">Relative Strength</h4>
          <Image
            src="/placeholder.svg?height=200&width=400"
            alt="Relative strength chart"
            fill
            className="object-contain p-4"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="rounded-lg bg-secondary/50 p-3">
          <div className="text-xs text-muted-foreground">Returns (1Y)</div>
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">{stock1}</div>
            <div className="text-lg font-semibold">
              {MOCK_COMPARISON.returns[stock1 as keyof typeof MOCK_COMPARISON.returns] || 0}%
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">{stock2}</div>
            <div className="text-lg font-semibold">
              {MOCK_COMPARISON.returns[stock2 as keyof typeof MOCK_COMPARISON.returns] || 0}%
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-secondary/50 p-3">
          <div className="text-xs text-muted-foreground">Volatility</div>
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">{stock1}</div>
            <div className="text-lg font-semibold">
              {MOCK_COMPARISON.volatility[stock1 as keyof typeof MOCK_COMPARISON.volatility] || 0}%
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">{stock2}</div>
            <div className="text-lg font-semibold">
              {MOCK_COMPARISON.volatility[stock2 as keyof typeof MOCK_COMPARISON.volatility] || 0}%
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-secondary/50 p-3">
          <div className="text-xs text-muted-foreground">P/E Ratio</div>
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">{stock1}</div>
            <div className="text-lg font-semibold">
              {MOCK_COMPARISON.peRatio[stock1 as keyof typeof MOCK_COMPARISON.peRatio] || 0}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">{stock2}</div>
            <div className="text-lg font-semibold">
              {MOCK_COMPARISON.peRatio[stock2 as keyof typeof MOCK_COMPARISON.peRatio] || 0}
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-secondary/50 p-3">
          <div className="text-xs text-muted-foreground">Market Cap (T)</div>
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">{stock1}</div>
            <div className="text-lg font-semibold">
              ${MOCK_COMPARISON.marketCap[stock1 as keyof typeof MOCK_COMPARISON.marketCap] || 0}T
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">{stock2}</div>
            <div className="text-lg font-semibold">
              ${MOCK_COMPARISON.marketCap[stock2 as keyof typeof MOCK_COMPARISON.marketCap] || 0}T
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
