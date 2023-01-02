import { Scatter } from "react-chartjs-2";

const ScatterChart = ({ relevance, intensity, likelihood }) => {
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
        data: {
          x: {
            min: Math.min(...intensity),
            max: Math.max(...relevance),
          },
          y: {
            min: Math.min(...intensity),
            max: Math.max(...relevance),
          },
        },
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };
  return <Scatter options={scatterOptions} data={scatterData} />;
};

export default ScatterChart;
