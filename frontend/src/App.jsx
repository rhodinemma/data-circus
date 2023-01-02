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
import BubbleChart from "./components/BubbleChart/BubbleChart";
import ScatterChart from "./components/ScatterChart/ScatterChart";
import RadarChart from "./components/RadarChart/RadarChart";
import PieChart from "./components/PieChart/PieChart";
import LineChart from "./components/LineChart/LineChart";
import DonutChart from "./components/DonutChart/DonutChart";
import PolarChart from "./components/PolarChart/PolarChart";

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

  //console.log(topic);
  // console.log(sector);
  // console.log(region);
  // console.log(pestle);
  // console.log(country);
  // console.log(intensity);
  // console.log(relevance);
  // console.log(likelihood);
  // console.log(topicFilter);

  return (
    <>
      <LineChart pestle={pestle} intensity={intensity} />
      <br />
      <br />
      <PieChart country={country} relevance={relevance} />
      <br />
      <br />
      <RadarChart topic={topic} intensity={intensity} />
      <br />
      <br />
      <DonutChart
        topic={topic}
        relevance={relevance}
        intensity={intensity}
        likelihood={likelihood}
      />
      <br />
      <br />
      <PolarChart />
      <br />
      <br />
      <ScatterChart
        relevance={relevance}
        intensity={intensity}
        likelihood={likelihood}
      />
      <br />
      <br />
      <BubbleChart />
    </>
  );
}

export default App;
