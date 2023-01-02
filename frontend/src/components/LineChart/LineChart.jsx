import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = (props) => {
  const { pestle, intensity } = props;
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = pestle;

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Dataset 2",
        data: intensity,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return <Line options={options} data={data} />;
};

export default LineChart;
