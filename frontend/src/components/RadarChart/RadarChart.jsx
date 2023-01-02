import React from "react";
import { Radar } from "react-chartjs-2";

const RadarChart = (props) => {
  const { topic, intensity } = props;
  const radarData = {
    labels: topic,
    datasets: [
      {
        label: "Topics",
        data: intensity,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };
  return <Radar data={radarData} />;
};

export default RadarChart;
