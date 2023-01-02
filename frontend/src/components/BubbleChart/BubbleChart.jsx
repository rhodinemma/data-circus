import React from "react";
import faker from "faker";
import { Bubble } from "react-chartjs-2";

const BubbleChart = () => {
  const bubbleOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const bubbleData = {
    datasets: [
      {
        label: "Red dataset",
        data: Array.from({ length: 50 }, () => ({
          x: faker.datatype.number({ min: -100, max: 100 }),
          y: faker.datatype.number({ min: -100, max: 100 }),
          r: faker.datatype.number({ min: 5, max: 20 }),
        })),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Blue dataset",
        data: Array.from({ length: 50 }, () => ({
          x: faker.datatype.number({ min: -100, max: 100 }),
          y: faker.datatype.number({ min: -100, max: 100 }),
          r: faker.datatype.number({ min: 5, max: 20 }),
        })),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return <Bubble options={bubbleOptions} data={bubbleData} />;
};

export default BubbleChart;
