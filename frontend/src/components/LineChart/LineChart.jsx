import React, { useState } from "react";
import { Line } from "react-chartjs-2";

const LineChart = (props) => {
  const [filter, setFilter] = useState("");
  const { pestle, intensity, relevance, likelihood } = props;
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
        data:
          filter === "intensity"
            ? intensity
            : filter === "relevance"
            ? relevance
            : likelihood,
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
            <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              {filter === "intensity"
                ? "Statistics with intensity"
                : filter === "relevance"
                ? "Statistics with relevance"
                : filter === "likelihood"
                ? "Statistics with likelihood"
                : "Statistics"}
            </h1>
            <select
              className="btn btn-outline-dark"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="intensity">Intensity</option>
              <option value="relevance">Relevance</option>
              <option value="likelihood">Likelihood</option>
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
