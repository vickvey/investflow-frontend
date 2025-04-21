"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { StockInput } from "@/components/ui/stock-input"

// Mock optimization results
const MOCK_OPTIMIZATION = {
  weights: {
    AAPL: 25,
    MSFT: 20,
    GOOGL: 15,
    AMZN: 10,
    META: 10,
    TSLA: 5,
    NVDA: 5,
    JPM: 5,
    V: 3,
    JNJ: 2,
  },
  metrics: {
    expectedReturn: 12.5,
    risk: 15.8,
    sharpeRatio: 0.79,
    sortinoRatio: 1.25,
    maxDrawdown: -18.7,
  },
}

export function PortfolioOptimizerCard() {
  const [stocks, setStocks] = useState<string[]>(["AAPL", "MSFT", "GOOGL", "AMZN", "META"])
  const [currentStock, setCurrentStock] = useState("")
  const [showResults, setShowResults] = useState(false)

  const addStock = () => {
    if (currentStock && !stocks.includes(currentStock) && stocks.length < 10) {
      setStocks([...stocks, currentStock])
      setCurrentStock("")
    }
  }

  const removeStock = (stockToRemove: string) => {
    setStocks(stocks.filter((stock) => stock !== stockToRemove))
  }

  const generateOptimization = () => {
    setShowResults(true)
  }

  return (
    <Card title="Portfolio Optimizer">
      <div className="mb-4">
        <p className="text-sm text-muted-foreground">
          Add up to 10 stocks to your portfolio for optimization. Our engine will calculate the optimal allocation based
          on your settings.
        </p>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {stocks.map((stock) => (
          <div key={stock} className="flex items-center gap-2 rounded-full bg-secondary px-3 py-1">
            <span className="text-sm font-medium">{stock}</span>
            <button
              onClick={() => removeStock(stock)}
              className="rounded-full text-muted-foreground hover:text-foreground"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <div className="mb-6 flex gap-2">
        <StockInput className="flex-1" placeholder="Add a stock..." onSelect={(stock) => setCurrentStock(stock)} />
        <button
          onClick={addStock}
          disabled={!currentStock || stocks.includes(currentStock) || stocks.length >= 10}
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
        >
          Add
        </button>
      </div>

      <div className="mb-6">
        <button
          onClick={generateOptimization}
          disabled={stocks.length < 2}
          className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
        >
          Generate Optimal Portfolio
        </button>
      </div>

      {showResults && (
        <div className="mt-6">
          <h3 className="mb-4 text-lg font-semibold">Optimization Results</h3>

          <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="relative h-64 w-full rounded-lg border bg-card p-4">
              <h4 className="mb-2 text-sm font-medium">Portfolio Allocation</h4>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Portfolio allocation pie chart"
                fill
                className="object-contain p-4"
              />
            </div>

            <div className="relative h-64 w-full rounded-lg border bg-card p-4">
              <h4 className="mb-2 text-sm font-medium">Efficient Frontier</h4>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Efficient frontier chart"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>

          <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-5">
            <div className="rounded-lg bg-secondary/50 p-3 text-center">
              <div className="text-xs text-muted-foreground">Expected Return</div>
              <div className="text-lg font-semibold">{MOCK_OPTIMIZATION.metrics.expectedReturn}%</div>
            </div>

            <div className="rounded-lg bg-secondary/50 p-3 text-center">
              <div className="text-xs text-muted-foreground">Risk (Volatility)</div>
              <div className="text-lg font-semibold">{MOCK_OPTIMIZATION.metrics.risk}%</div>
            </div>

            <div className="rounded-lg bg-secondary/50 p-3 text-center">
              <div className="text-xs text-muted-foreground">Sharpe Ratio</div>
              <div className="text-lg font-semibold">{MOCK_OPTIMIZATION.metrics.sharpeRatio}</div>
            </div>

            <div className="rounded-lg bg-secondary/50 p-3 text-center">
              <div className="text-xs text-muted-foreground">Sortino Ratio</div>
              <div className="text-lg font-semibold">{MOCK_OPTIMIZATION.metrics.sortinoRatio}</div>
            </div>

            <div className="rounded-lg bg-secondary/50 p-3 text-center">
              <div className="text-xs text-muted-foreground">Max Drawdown</div>
              <div className="text-lg font-semibold">{MOCK_OPTIMIZATION.metrics.maxDrawdown}%</div>
            </div>
          </div>

          <div>
            <h4 className="mb-2 text-sm font-medium">Optimal Allocation</h4>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b text-left">
                    <th className="pb-2 text-sm font-medium">Stock</th>
                    <th className="pb-2 text-right text-sm font-medium">Weight</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(MOCK_OPTIMIZATION.weights)
                    .filter(([symbol]) => stocks.includes(symbol))
                    .sort(([, a], [, b]) => b - a)
                    .map(([symbol, weight]) => (
                      <tr key={symbol} className="border-b last:border-0">
                        <td className="py-2 font-medium">{symbol}</td>
                        <td className="py-2 text-right font-medium">{weight}%</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </Card>
  )
}
