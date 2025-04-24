# Investflow Frontend

## Overview

Investflow is a powerful web application for **stock performance analysis** and
**portfolio optimization**, built with **Next.js 15.3.1**. Deployed on
**Vercel** at [investflow.vercel.app](https://investflow.vercel.app), it
provides investors and financial enthusiasts with tools to analyze stock data
and optimize investment portfolios. The frontend fetches data from a **FastAPI
backend** (`investflow-backend`) and presents it through interactive charts and
metrics, using **Chart.js** for visualizations and **Tailwind CSS** for a
responsive, modern design.

Key features include stock price and volume analysis, performance metrics (e.g.,
returns, alpha, beta), stock comparisons, top performers by index, and portfolio
optimization to maximize returns and minimize risk. The application is
user-friendly, with components like stock tickers and date range pickers to
customize analyses.

## Features

- **Stock Performance Analysis**:
  - View price history and trading volume via interactive line and bar charts.
  - Analyze metrics like returns, alpha, beta, Sharpe ratio, volatility, max
    drawdown, and win rate.
  - Compare stocks and view top performers by index (e.g., NIFTY).
- **Portfolio Optimization**:
  - Optimize investment portfolios based on user-defined settings (e.g., risk
    tolerance, expected returns).
  - Visualize optimized portfolio allocations and performance.
- **Interactive Components**:
  - Stock ticker input for selecting stocks (e.g., AAPL, GOOGL).
  - Date range picker for custom analysis periods.
  - Candlestick charts for detailed price movements.
- **Responsive Design**:
  - Clean, mobile-friendly interface with Tailwind CSS styling.

## Pages

The Investflow frontend includes the following pages, as per the build output:

1. **Homepage (`/`)**:

   - **Size**: 184 B, **First Load JS**: 110 kB
   - The landing page introduces Investflow, highlighting stock analysis and
     portfolio optimization features.
   - Provides navigation to the user dashboard.

2. **User Dashboard (`/user`)**:

   - **Size**: 97.5 kB, **First Load JS**: 213 kB
   - The core interface for stock analysis and portfolio optimization, hosted
     under the dashboard layout.
   - Features include:
     - **Stock Performance Analysis**: Select a stock and date range to view
       charts (price history, volume) and metrics via `StockPerformanceCard`.
     - **Portfolio Optimization**: Configure and optimize portfolios using
       `PortfolioOptimizerCard`, with settings like risk and return goals.
     - **Stock Comparison**: Compare two stocks (e.g., AAPL vs. GOOGL) via
       `StockComparisonCard`.
     - **Top Performers**: View top-performing stocks by index via
       `TopPerformersCard`.
     - **Candlestick Charts**: Detailed price data visualization via
       `CandlestickChartCard`.
     - **Portfolio Info**: Summary of portfolio performance via
       `PortfolioInfoCard`.

3. **Not Found (`/_not-found`)**:
   - **Size**: 977 B, **First Load JS**: 102 kB
   - A custom 404 page for invalid routes, ensuring a seamless user experience.

## Project Structure

```
src/
├── app/                          # Next.js app directory
│   ├── (dashboard)/              # Dashboard layout
│   │   ├── layout.tsx            # Dashboard layout
│   │   └── user/                 # User dashboard page
│   ├── favicon.ico               # Favicon
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── components/                   # React components
│   ├── dashboard/                # Dashboard-specific components
│   │   ├── candlestick-chart-card.tsx
│   │   ├── candlestick-chart.tsx
│   │   ├── optimization-settings-card.tsx
│   │   ├── portfolio-info-card.tsx
│   │   ├── portfolio-optimizer-card.tsx
│   │   ├── sidebar.tsx
│   │   ├── stock-comparison-card.tsx
│   │   ├── stock-info-card.tsx
│   │   ├── stock-performance-card.tsx
│   │   └── top-performers-card.tsx
│   └── ui/                       # Reusable UI components
│       ├── card.tsx
│       ├── date-range-picker.tsx
│       └── stock-input.tsx
└── lib/                          # Utility files
    ├── apiUrl.ts                 # API URL configuration
    └── utils.ts                  # General utilities
```

## Prerequisites

- **Node.js**: Version 18.x or later.
- **npm**: Version 8.x or later.
- **Backend**: The `investflow-backend` FastAPI server is should be deployed.

## Setup Instructions

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/investflow-frontend.git
   cd investflow-frontend
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**:

   - Create `.env.local` in the root:
     ```bash
     echo "NEXT_PUBLIC_API_URL=https://xxxxxxxx.xxx.com" > .env.local
     ```
   - Replace with your backend’s HTTPS URL.

4. **Run Locally**:

   ```bash
   npm run dev
   ```

   - Open [http://localhost:3000](http://localhost:3000).

5. **Build for Production**:
   ```bash
   npm run build
   npm run start
   ```

## Deployment

Deployed on **Vercel** at
[investflow.vercel.app](https://investflow.vercel.app). To deploy your instance:

1. **Push to GitHub**:

   ```bash
   git push origin main
   ```

2. **Import to Vercel**:

   - Go to [vercel.com](https://vercel.com) > “New Project” > Import repository.
   - Set environment variable:
     - `NEXT_PUBLIC_API_URL`: Backend URL
   - Deploy.

3. **Verify**:
   - Test stock analysis and portfolio optimization features.

## Backend Dependency

The frontend relies on the `investflow-backend` FastAPI server for data. Key
endpoints:

- `/api/stock/{ticker}/info`: Stock metadata.
- `/api/stock/{ticker}/performance`: Metrics (returns, alpha, etc.).
- `/api/stock/{ticker}/ohlc`: Price and volume history.
- `/api/stock/compare`: Compare stocks.
- `/api/stock/top-performers`: Top stocks by index.

Deploy the backend to **some online cloud service** for a public HTTPS URL. See
the `investflow-backend` repository for details.

## Troubleshooting

- **Mixed Content Errors**:

  - Ensure `NEXT_PUBLIC_API_URL` uses HTTPS.
  - Verify backend CORS allows `https://investflow.vercel.app`.

- **Charts or Metrics Not Loading**:

  - Check console (F12 > Console) for API errors.
  - Confirm backend endpoints return correct formats (e.g., `priceHistory`).

- **Build Issues**:
  - Ensure dependencies:
    ```bash
    npm install next@15.3.1 react-chartjs-2 chart.js date-fns chartjs-adapter-date-fns
    ```

## Contributing

1. Fork the repository.
2. Create a branch (`git checkout -b feature/your-feature`).
3. Commit changes (`git commit -m "Add your feature"`).
4. Push (`git push origin feature/your-feature`).
5. Open a pull request.

## License

MIT License. See [LICENSE](LICENSE).

## Contact

For support, contact [your-email@example.com](mailto:your-email@example.com) or
open a GitHub issue.
