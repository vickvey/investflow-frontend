"use client"

import { useState } from "react"
import { TrendingUp, TrendingDown, DollarSign, BarChart3, Activity } from "lucide-react"
import { Card } from "@/components/ui/card"
import { StockInput } from "@/components/ui/stock-input"

// Mock data for stock info
const MOCK_STOCK_DATA = {
  AAPL: {
    name: "Apple Inc.",
    price: 182.63,
    change: 1.25,
    changePercent: 0.69,
    marketCap: "2.87T",
    peRatio: 30.21,
    dividend: 0.92,
    volume: "58.72M",
    avgVolume: "60.12M",
    high: 183.92,
    low: 180.17,
    open: 181.27,
    prevClose: 181.38,
  },
  MSFT: {
    name: "Microsoft Corporation",
    price: 417.88,
    change: -2.32,
    changePercent: -0.55,
    marketCap: "3.11T",
    peRatio: 36.15,
    dividend: 0.68,
    volume: "22.45M",
    avgVolume: "25.67M",
    high: 420.54,
    low: 415.26,
    open: 419.73,
    prevClose: 420.2,
  },
  GOOGL: {
    name: "Alphabet Inc.",
    price: 164.32,
    change: 2.87,
    changePercent: 1.78,
    marketCap: "2.05T",
    peRatio: 25.12,
    dividend: 0,
    volume: "25.31M",
    avgVolume: "28.45M",
    high: 165.21,
    low: 162.78,
    open: 163.45,
    prevClose: 161.45,
  },
}

export function StockInfoCard() {
  const [selectedStock, setSelectedStock] = useState("AAPL")
  const stockData = MOCK_STOCK_DATA[selectedStock as keyof typeof MOCK_STOCK_DATA] || MOCK_STOCK_DATA.AAPL

  return (
    <Card title="Stock Information">
      <div className="mb-4">
        <StockInput onSelect={setSelectedStock} placeholder="Enter stock ticker symbol..." />
      </div>

      <div className="mb-6 flex items-end gap-4">
        <h2 className="text-3xl font-bold">${stockData.price.toFixed(2)}</h2>
        <div className={`flex items-center ${stockData.change >= 0 ? "text-green-500" : "text-red-500"}`}>
          {stockData.change >= 0 ? <TrendingUp className="mr-1 h-4 w-4" /> : <TrendingDown className="mr-1 h-4 w-4" />}
          <span className="font-medium">
            {stockData.change >= 0 ? "+" : ""}
            {stockData.change.toFixed(2)} ({stockData.change >= 0 ? "+" : ""}
            {stockData.changePercent.toFixed(2)}%)
          </span>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="mb-2 text-lg font-semibold">
          {stockData.name} ({selectedStock})
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg bg-secondary/50 p-3">
          <div className="mb-1 flex items-center text-sm text-muted-foreground">
            <DollarSign className="mr-1 h-4 w-4" />
            <span>Market Cap</span>
          </div>
          <div className="text-lg font-semibold">${stockData.marketCap}</div>
        </div>

        <div className="rounded-lg bg-secondary/50 p-3">
          <div className="mb-1 flex items-center text-sm text-muted-foreground">
            <BarChart3 className="mr-1 h-4 w-4" />
            <span>P/E Ratio</span>
          </div>
          <div className="text-lg font-semibold">{stockData.peRatio}</div>
        </div>

        <div className="rounded-lg bg-secondary/50 p-3">
          <div className="mb-1 flex items-center text-sm text-muted-foreground">
            <Activity className="mr-1 h-4 w-4" />
            <span>Volume</span>
          </div>
          <div className="text-lg font-semibold">{stockData.volume}</div>
        </div>

        <div className="rounded-lg bg-secondary/50 p-3">
          <div className="mb-1 flex items-center text-sm text-muted-foreground">
            <TrendingUp className="mr-1 h-4 w-4" />
            <span>Dividend Yield</span>
          </div>
          <div className="text-lg font-semibold">{stockData.dividend}%</div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div>
          <div className="text-xs text-muted-foreground">Open</div>
          <div className="font-medium">${stockData.open.toFixed(2)}</div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground">Previous Close</div>
          <div className="font-medium">${stockData.prevClose.toFixed(2)}</div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground">Day's High</div>
          <div className="font-medium">${stockData.high.toFixed(2)}</div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground">Day's Low</div>
          <div className="font-medium">${stockData.low.toFixed(2)}</div>
        </div>
      </div>
    </Card>
  )
}
