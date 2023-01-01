import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Filler,
  Legend,
  ArcElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import { Radar } from "react-chartjs-2";
import { Scatter } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(ArcElement, Tooltip, Legend);

ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

function App() {
  // hook to save our data in state from database
  const [allData, setAllData] = useState([]);

  // arrays to store filtered data
  var topic = [];
  var sector = [];
  var region = [];
  var pestle = [];
  var country = [];
  var topicFilter = [];
  var intensity = [];
  var relevance = [];
  var likelihood = [];

  // hook to fetch data from mongodb database
  useEffect(() => {
    fetchData();
  }, []);

  // function to handle async call to backend
  const fetchData = async () => {
    let response = await axios.get("http://localhost:5000/getAllData");
    setAllData(response.data.data);
  };

  // function to handle filtering data [topics, sector, region, pestle]
  const filterData = () => {
    let topicFlag = 0;
    let sectorFlag = 0;
    let regionFlag = 0;
    let pestleFlag = 0;
    let countryFlag = 0;

    allData.forEach((obj) => {
      // sections below check for already added data
      topic.forEach((top) => {
        if (top == obj.topic || obj.topic == "") {
          topicFlag = 1;
        }
      });
      sector.forEach((sec) => {
        if (sec == obj.sector || obj.sector == "") {
          sectorFlag = 1;
        }
      });
      region.forEach((reg) => {
        if (reg == obj.region || obj.region == "") {
          regionFlag = 1;
        }
      });
      pestle.forEach((pes) => {
        if (pes == obj.pestle || obj.pestle == "") {
          pestleFlag = 1;
        }
      });
      country.forEach((co) => {
        if (co == obj.country || obj.country == "") {
          countryFlag = 1;
        }
      });

      // if all flags are 0, add data to arrays
      if (topicFlag == 0) {
        topic.push(obj.topic);
      }
      if (sectorFlag == 0) {
        sector.push(obj.sector);
      }
      if (regionFlag == 0) {
        region.push(obj.region);
      }
      if (pestleFlag == 0) {
        pestle.push(obj.pestle);
      }
      if (countryFlag == 0) {
        country.push(obj.country);
      }

      // after updating arrays, reset flags
      topicFlag = 0;
      sectorFlag = 0;
      regionFlag = 0;
      pestleFlag = 0;
      countryFlag = 0;
    });
  };

  filterData();

  // function to handle more filtering [intensity, relevance, likelihood]
  const filterOnTopics = () => {
    topic.forEach((top) => {
      let obj = {
        topic: top,
        intensity: 0,
        relevance: 0,
        likelihood: 0,
      };
      topicFilter.push(obj);
    });

    allData.forEach((obj) => {
      for (let top of topicFilter) {
        if (top.topic == obj.topic) {
          if (top.intensity < obj.intensity) {
            top.intensity = obj.intensity;
          }
          if (top.relevance < obj.relevance) {
            top.relevance = obj.relevance;
          }
          if (top.likelihood < obj.likelihood) {
            top.likelihood = obj.likelihood;
          }
        }
      }
    });

    topicFilter.forEach((top) => {
      intensity.push(top.intensity);
      relevance.push(top.relevance);
      likelihood.push(top.likelihood);
    });
  };

  filterOnTopics();

  console.log(topic);
  console.log(sector);
  console.log(region);
  console.log(pestle);
  console.log(country);

  console.log("*****************************");

  console.log(intensity);
  console.log(relevance);
  console.log(likelihood);

  console.log(topicFilter);

  console.log("******LINE CHART*************");

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
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

  console.log("*******PIE CHART********");

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

  console.log("*******RADAR CHART*********");

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

  console.log("*******SCATTER CHART*******");

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
        data: Array.from({ length: 100 }, () => ({
          x: faker.datatype.number({ min: -100, max: 100 }),
          y: faker.datatype.number({ min: -100, max: 100 }),
        })),
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  return (
    <>
      <Line options={options} data={data} />
      <br />
      <br />
      <Pie data={pieData} />
      <br />
      <br />
      <Radar data={radarData} />
      <br />
      <br />
      <Scatter options={scatterOptions} data={scatterData} />
    </>
  );
}

export default App;
