"use client"

import { useState } from "react"
import { TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"

// Mock top performers data
const MOCK_TOP_PERFORMERS = [
  { symbol: "NVDA", name: "NVIDIA Corporation", change: 145.32, changePercent: 145.32 },
  { symbol: "META", name: "Meta Platforms, Inc.", change: 132.87, changePercent: 132.87 },
  { symbol: "TSLA", name: "Tesla, Inc.", change: 87.54, changePercent: 87.54 },
  { symbol: "AAPL", name: "Apple Inc.", change: 45.21, changePercent: 45.21 },
  { symbol: "MSFT", name: "Microsoft Corporation", change: 42.76, changePercent: 42.76 },
  { symbol: "AMZN", name: "Amazon.com, Inc.", change: 38.92, changePercent: 38.92 },
  { symbol: "GOOGL", name: "Alphabet Inc.", change: 35.67, changePercent: 35.67 },
  { symbol: "AMD", name: "Advanced Micro Devices, Inc.", change: 32.45, changePercent: 32.45 },
  { symbol: "INTC", name: "Intel Corporation", change: 28.76, changePercent: 28.76 },
  { symbol: "CRM", name: "Salesforce, Inc.", change: 25.34, changePercent: 25.34 },
]

export function TopPerformersCard() {
  const [index, setIndex] = useState("NIFTY") // or "SENSEX"

  return (
    <Card title="Top Performing Stocks">
      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setIndex("NIFTY")}
          className={`rounded-md px-3 py-1 text-sm font-medium ${
            index === "NIFTY"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-foreground hover:bg-secondary/80"
          }`}
        >
          NIFTY
        </button>
        <button
          onClick={() => setIndex("SENSEX")}
          className={`rounded-md px-3 py-1 text-sm font-medium ${
            index === "SENSEX"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-foreground hover:bg-secondary/80"
          }`}
        >
          SENSEX
        </button>
      </div>

      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Top {index} Performers (Last 12 Months)</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b text-left">
              <th className="pb-2 text-sm font-medium">Symbol</th>
              <th className="pb-2 text-sm font-medium">Name</th>
              <th className="pb-2 text-right text-sm font-medium">Change</th>
              <th className="pb-2 text-right text-sm font-medium">% Change</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_TOP_PERFORMERS.map((stock) => (
              <tr key={stock.symbol} className="border-b last:border-0">
                <td className="py-3 font-medium">{stock.symbol}</td>
                <td className="py-3 text-sm text-muted-foreground">{stock.name}</td>
                <td className="py-3 text-right font-medium text-green-500">+${stock.change.toFixed(2)}</td>
                <td className="py-3 text-right">
                  <div className="flex items-center justify-end text-green-500">
                    <TrendingUp className="mr-1 h-4 w-4" />
                    <span className="font-medium">+{stock.changePercent.toFixed(2)}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
