"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"

interface StockInputProps {
  onSelect?: (stock: string) => void
  placeholder?: string
  className?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

// Mock stock data for suggestions
const MOCK_STOCKS = [
  { symbol: "AAPL", name: "Apple Inc." },
  { symbol: "MSFT", name: "Microsoft Corporation" },
  { symbol: "GOOGL", name: "Alphabet Inc." },
  { symbol: "AMZN", name: "Amazon.com, Inc." },
  { symbol: "META", name: "Meta Platforms, Inc." },
  { symbol: "TSLA", name: "Tesla, Inc." },
  { symbol: "NVDA", name: "NVIDIA Corporation" },
  { symbol: "JPM", name: "JPMorgan Chase & Co." },
  { symbol: "V", name: "Visa Inc." },
  { symbol: "JNJ", name: "Johnson & Johnson" },
]

export function StockInput({
  onSelect,
  placeholder = "Search for a stock...",
  className,
  value,
  onChange,
}: StockInputProps) {
  const [query, setQuery] = useState(value || "")
  const [showSuggestions, setShowSuggestions] = useState(false)

  const filteredStocks = MOCK_STOCKS.filter(
    (stock) =>
      stock.symbol.toLowerCase().includes(query.toLowerCase()) ||
      stock.name.toLowerCase().includes(query.toLowerCase()),
  ).slice(0, 5)

  const handleSelect = (symbol: string) => {
    setQuery(symbol)
    setShowSuggestions(false)
    if (onSelect) onSelect(symbol)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setQuery(newValue)
    setShowSuggestions(true)
    if (onChange) onChange(e)
  }

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => setShowSuggestions(true)}
          placeholder={placeholder}
          className="w-full rounded-md border border-input bg-background px-3 py-2 pl-10 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      </div>

      {showSuggestions && query.length > 0 && (
        <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-card py-1 shadow-lg">
          {filteredStocks.length > 0 ? (
            filteredStocks.map((stock) => (
              <li
                key={stock.symbol}
                onClick={() => handleSelect(stock.symbol)}
                className="cursor-pointer px-4 py-2 hover:bg-secondary"
              >
                <div className="font-medium">{stock.symbol}</div>
                <div className="text-xs text-muted-foreground">{stock.name}</div>
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-sm text-muted-foreground">No results found</li>
          )}
        </ul>
      )}
    </div>
  )
}
