import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  horizontal?: boolean;
  data_1: number[];
  data_2: number[];
  title1: string;
  title2: string;
  bgColor_1: string;
  bgColor_2: string;
  labels?: string[];
}

const months = ["January", "February", "March", "April", "May", "June", "July"];

export function BarChart({
  horizontal = false,
  data_1 = [],
  data_2 = [],
  title1,
  title2,
  bgColor_1,
  bgColor_2,
  labels = months,
}: BarChartProps) {
  const options: ChartOptions<"bar"> = {
    responsive: true,
    indexAxis: horizontal ? "y" : "x",
    plugins: {
      legend: {
        display: false, /*for line behind the graph */
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const data: ChartData<"bar", number[], string> = {
    labels,
    datasets: [
      {
        label: title1,
        data: data_1,
        backgroundColor: bgColor_1,
      },
      {
        label: title2,
        data: data_2,
        backgroundColor: bgColor_2,
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
