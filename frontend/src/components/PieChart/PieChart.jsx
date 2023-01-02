import React, { useState } from "react";
import { Pie } from "react-chartjs-2";

const PieChart = (props) => {
  const [filter, setFilter] = useState("");
  const { country, relevance, intensity, likelihood } = props;
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
  const pieData = {
    labels: country,
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
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
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
            <h1>
              {filter === "intensity"
                ? "Country[intensity]"
                : filter === "relevance"
                ? "Country[relevance]"
                : filter === "likelihood"
                ? "Country[likelihood]"
                : "Countries"}
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
          <Pie data={pieData} options={options} />
        </div>
      </div>
    </>
  );
};

export default PieChart;
