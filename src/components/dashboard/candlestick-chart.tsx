'use client';
import { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  type ChartType,
  type ChartData,
  type ChartOptions,
  type Plugin,
  type Scale,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import annotationPlugin from 'chartjs-plugin-annotation';
import { apiUrl } from '@/lib/apiUrl';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  annotationPlugin,
);

// Define interface for OHLC data
interface OHLCData {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

// Define interface for candlestick data point
interface CandlestickDataPoint {
  x: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface CandlestickChartProps {
  ticker: string;
  dateRange: { start: Date; end: Date };
  height?: number;
}

// Type for Chart.js context
interface CandlestickTooltipContext {
  chart: ChartJS;
  tooltip: {
    dataPoints: {
      raw: CandlestickDataPoint;
    }[];
  };
  dataIndex: number;
  dataset: {
    data: CandlestickDataPoint[];
  };
  raw: CandlestickDataPoint;
}

export function CandlestickChart({
  ticker,
  dateRange,
  height = 300,
}: CandlestickChartProps) {
  const [ohlcData, setOhlcData] = useState<OHLCData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOHLCData = async () => {
      if (!ticker) return;

      setLoading(true);
      setError(null);
      try {
        const startDate = dateRange.start.toISOString().split('T')[0];
        const endDate = dateRange.end.toISOString().split('T')[0];

        const response = await fetch(
          `${apiUrl}/api/stock/${ticker}/ohlc?start=${startDate}&end=${endDate}`,
        );

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(
            `Failed to fetch OHLC data: ${response.status} ${errorText}`,
          );
        }

        const data: OHLCData[] = await response.json();
        setOhlcData(data);
      } catch (err) {
        console.error('Error fetching OHLC data:', err);
        setError(
          err instanceof Error ? err.message : 'An unknown error occurred',
        );
      } finally {
        setLoading(false);
      }
    };

    fetchOHLCData();
  }, [ticker, dateRange]);

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        Loading chart data...
      </div>
    );
  }

  if (error || !ohlcData || ohlcData.length === 0) {
    return (
      <div style={{ color: '#ef4444' }}>
        Error: {error || 'No OHLC data available'}
      </div>
    );
  }

  // Custom candlestick drawing function
  const drawCandlestick = (
    ctx: CanvasRenderingContext2D,
    x: number,
    open: number,
    high: number,
    low: number,
    close: number,
    color: string,
  ) => {
    const width = 8; // Candlestick width

    // Draw the candle body
    ctx.fillStyle = color;
    ctx.fillRect(
      x - width / 2,
      Math.min(open, close),
      width,
      Math.abs(close - open),
    );

    // Draw the wick
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, low);
    ctx.lineTo(x, high);
    ctx.stroke();
  };

  const candlestickPlugin: Plugin<ChartType> = {
    id: 'candlestick',
    beforeDraw: (chart) => {
      const ctx = chart.ctx;
      const dataset = chart.data.datasets[0];
      const meta = chart.getDatasetMeta(0);

      for (let i = 0; i < meta.data.length; i++) {
        const dataPoint = dataset.data[i] as unknown as CandlestickDataPoint;
        const x = (meta.data[i] as { x: number }).x;

        // Determine color based on whether price went up or down
        const color = dataPoint.open <= dataPoint.close ? '#4CAF50' : '#F44336'; // Green for up, red for down

        // Convert values to y-coordinates on the chart
        const yScale = chart.scales['y'] as Scale;
        const open = yScale.getPixelForValue(dataPoint.open);
        const high = yScale.getPixelForValue(dataPoint.high);
        const low = yScale.getPixelForValue(dataPoint.low);
        const close = yScale.getPixelForValue(dataPoint.close);

        drawCandlestick(ctx, x, open, high, low, close, color);
      }
    },
  };

  const data: ChartData<'bar'> = {
    labels: ohlcData.map((d) => d.date),
    datasets: [
      {
        label: 'OHLC',
        data: ohlcData.map((d) => ({
          x: d.date,
          open: d.open,
          high: d.high,
          low: d.low,
          close: d.close,
        })) as unknown as number[],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
          tooltipFormat: 'PPP',
        },
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Price ($)',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const dataPoint = (context as unknown as CandlestickTooltipContext)
              .raw;
            return [
              `Open: $${dataPoint.open.toFixed(2)}`,
              `High: $${dataPoint.high.toFixed(2)}`,
              `Low: $${dataPoint.low.toFixed(2)}`,
              `Close: $${dataPoint.close.toFixed(2)}`,
            ];
          },
        },
      },
    },
  };

  return (
    <div style={{ height: `${height}px` }}>
      <Chart
        type='bar'
        data={data}
        options={options}
        plugins={[candlestickPlugin]}
      />
    </div>
  );
}
