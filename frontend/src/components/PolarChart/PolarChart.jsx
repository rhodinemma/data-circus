import React, { useState } from "react";
import { PolarArea } from "react-chartjs-2";

const PolarChart = (props) => {
  const [filter, setFilter] = useState("");
  const { region, intensity, relevance, likelihood } = props;
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };
  const data = {
    labels: region,
    datasets: [
      {
        label: "# of Votes",
        data:
          filter === "intensity"
            ? intensity
            : filter === "relevance"
            ? relevance
            : likelihood,
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderWidth: 1,
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
                ? "Region[intensity]"
                : filter === "relevance"
                ? "Region[relevance]"
                : filter === "likelihood"
                ? "Region[likelihood]"
                : "Regions"}
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
        <div>
          <PolarArea data={data} options={options} />
        </div>
      </div>
    </>
  );
};

export default PolarChart;
