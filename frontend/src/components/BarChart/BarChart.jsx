import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import faker from "faker";
const BarChart = ({ intensity, relevance, region, likelihood }) => {
  const [filter, setFilter] = useState("");
  const [secondFilter, setSecondFilter] = useState("");
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "bottom",
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = region;

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data:
          filter === "intensity"
            ? intensity
            : filter === "relevance"
            ? relevance
            : likelihood,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data:
          secondFilter === "intensity"
            ? intensity
            : secondFilter === "relevance"
            ? relevance
            : likelihood,
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
                ? "Region with intensity"
                : filter === "relevance"
                ? "Region with relevance"
                : filter === "likelihood"
                ? "Region with likelihood"
                : "Region"}
            </h1>
            <select
              className="btn btn-outline-dark"
              value={secondFilter}
              onChange={(e) => setSecondFilter(e.target.value)}
            >
              <option value="intensity">Intensity</option>
              <option value="relevance">Relevance</option>
              <option value="likelihood">Likelihood</option>
            </select>
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
          <Bar options={options} data={data} />
        </div>
      </div>
    </>
  );
};

export default BarChart;
