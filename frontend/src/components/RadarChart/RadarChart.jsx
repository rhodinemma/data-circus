import React, { useState } from "react";
import { Radar } from "react-chartjs-2";

const RadarChart = (props) => {
  const [filter, setFilter] = useState("");
  const { topic, intensity, relevance, likelihood } = props;
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
  const radarData = {
    labels: topic,
    datasets: [
      {
        label: "Topics",
        data:
          filter === "intensity"
            ? intensity
            : filter === "relevance"
            ? relevance
            : likelihood,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
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
                ? "Topics[intensity]"
                : filter === "relevance"
                ? "Topics[relevance]"
                : filter === "likelihood"
                ? "Topics[likelihood]"
                : "Topics"}
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
          <Radar data={radarData} options={options} />
        </div>
      </div>
    </>
  );
};

export default RadarChart;
