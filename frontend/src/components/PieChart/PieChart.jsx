import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = (props) => {
  const { country, relevance } = props;
  const pieData = {
    labels: country,
    datasets: [
      {
        label: "# of Votes",
        data: relevance,
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
        <div className="row">
          <h1>Pie Chart</h1>
        </div>
        <div className="col-lg-6">
          <Pie data={pieData} />
        </div>
      </div>
    </>
  );
};

export default PieChart;
