import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = (props) => {
  const { pestle, intensity } = props;
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: false,
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
  return (
    <>
      <div className="col card p-3 border border-5">
        <div className="row mb-2">
          <div className="d-flex justify-content-between">
            <h1>Statistics</h1>
            <select className="btn btn-outline-dark">
              <option value="">Default</option>
              <option value="">Intensity</option>
              <option value="">Relevance</option>
              <option value="">Likelihood</option>
            </select>
          </div>
        </div>
        <div className="row">
          <Line options={options} data={data} />
        </div>
      </div>
    </>
  );
};

export default LineChart;
