import { PieChart, BarChart3, TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"

export function PortfolioInfoCard() {
  return (
    <Card>
      <h3 className="mb-4 text-xl font-bold">Portfolio Optimization</h3>
      <p className="mb-4 text-muted-foreground">
        Our portfolio optimization engine uses Modern Portfolio Theory to help you build an efficient portfolio that
        maximizes returns for a given level of risk.
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="flex items-start gap-3 rounded-lg bg-secondary/50 p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <PieChart className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium">Efficient Frontier</h4>
            <p className="text-sm text-muted-foreground">
              Find the optimal asset allocation that offers the highest expected return for a defined level of risk.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-lg bg-secondary/50 p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <BarChart3 className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium">Risk Diversification</h4>
            <p className="text-sm text-muted-foreground">
              Reduce portfolio volatility through scientific diversification across different assets.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-lg bg-secondary/50 p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <TrendingUp className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium">Performance Metrics</h4>
            <p className="text-sm text-muted-foreground">
              Evaluate portfolios using key metrics like Sharpe ratio, Sortino ratio, and maximum drawdown.
            </p>
          </div>
        </div>
      </div>
    </Card>
  )
}
