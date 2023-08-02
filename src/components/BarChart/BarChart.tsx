import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale } from "chart.js/auto";

import type { ChartData, ChartOptions } from "chart.js";

ChartJS.register(CategoryScale);

const options: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  color: "#5b54b1",
};

interface LineProps {
  data: ChartData<"bar">;
}

export const BarChart = ({ data }: LineProps) => {
  return <Bar data={data} options={options} />;
};
