import type React from "react"
import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
}

export function Card({ title, description, className, children, ...props }: CardProps) {
  return (
    <div className={cn("rounded-xl border bg-card p-6 shadow-md", className)} {...props}>
      {title && <h3 className="mb-2 text-xl font-bold">{title}</h3>}
      {description && <p className="mb-4 text-sm text-muted-foreground">{description}</p>}
      {children}
    </div>
  )
}
