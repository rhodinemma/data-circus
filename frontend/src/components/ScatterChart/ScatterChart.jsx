import faker from "faker";
import { Scatter } from "react-chartjs-2";

const ScatterChart = () => {
  const scatterOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const scatterData = {
    datasets: [
      {
        label: "A dataset",
        data: Array.from({ length: 100 }, () => ({
          x: faker.datatype.number({ min: -100, max: 100 }),
          y: faker.datatype.number({ min: -100, max: 100 }),
        })),
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };
  return <Scatter options={scatterOptions} data={scatterData} />;
};

export default ScatterChart;
