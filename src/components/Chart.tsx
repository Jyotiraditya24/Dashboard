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
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
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
        display: true /*for label to show */,
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
    scales: {
      /*for line behind the graph */
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
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
        barThickness: "flex",
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
      {
        label: title2,
        data: data_2,
        backgroundColor: bgColor_2,
        barThickness: "flex",
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
    ],
  };
  return <Bar options={options} data={data} />;
}

interface DonghnutChartProps {
  data: number[];
  backgroundColor: string[];
  labels: string[];
  cutout?: number | string;
  legend?: boolean;
  offset?: number[];
}

export const DonghnutChart = ({
  data,
  backgroundColor,
  labels,
  cutout,
  legend = true,
  offset,
}: DonghnutChartProps) => {
  const doughnutData: ChartData<"doughnut", number[], string> = {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
        borderWidth: 0,
        offset,
      },
    ],
  };

  const doughnutOptions: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        display: legend,
        position: "bottom",
        labels: {
          padding: 40,
        },
      },
    },
  };
  return <Doughnut data={doughnutData} options={doughnutOptions} />;
};
