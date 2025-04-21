"use client"

import { useState } from "react"
import { Calendar } from "lucide-react"

interface DateRangePickerProps {
  onSelect?: (range: { start: Date; end: Date }) => void
  className?: string
}

export function DateRangePicker({ onSelect, className }: DateRangePickerProps) {
  const [startDate, setStartDate] = useState<string>("")
  const [endDate, setEndDate] = useState<string>("")

  const handleSubmit = () => {
    if (startDate && endDate && onSelect) {
      onSelect({
        start: new Date(startDate),
        end: new Date(endDate),
      })
    }
  }

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <div className="relative">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="rounded-md border border-input bg-background px-3 py-2 pl-10 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      </div>
      <span className="text-muted-foreground">to</span>
      <div className="relative">
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="rounded-md border border-input bg-background px-3 py-2 pl-10 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      </div>
      <button
        onClick={handleSubmit}
        disabled={!startDate || !endDate}
        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
      >
        Apply
      </button>
    </div>
  )
}
