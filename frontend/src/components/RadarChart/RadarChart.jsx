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
  return (
    <>
      <div className="col card p-3 border border-5">
        <div className="row">
          <h1>Radar Chart</h1>
        </div>
        <div className="col-lg-6">
          <Radar data={radarData} />
        </div>
      </div>
    </>
  );
};

export default RadarChart;
