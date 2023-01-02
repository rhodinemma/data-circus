import { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Filler,
  Legend,
  ArcElement,
} from "chart.js";
import RadarChart from "./../RadarChart/RadarChart";
import PieChart from "./../PieChart/PieChart";
import LineChart from "./../LineChart/LineChart";
import DonutChart from "./../DonutChart/DonutChart";
import PolarChart from "./../PolarChart/PolarChart";
import Cards from "./../Cards/Cards";
import BarChart from "../BarChart/BarChart";

ChartJS.register(ArcElement, Tooltip, Legend);

ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  ArcElement,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

function App() {
  // hook to save our data in state from database
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    let response = await axios.get("http://localhost:5000/getAllData");
    setAllData(response.data.data);
    setLoading(false);
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

  return (
    <>
      {loading ? (
        <>
          <center>
            <div
              className="spinner-border"
              style={{ width: "6rem", height: "6rem" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </center>
        </>
      ) : (
        <>
          <div className="container" style={{ paddingLeft: "11rem" }}>
            <h1>Data Visualization Project</h1>
            <br />

            <Cards sector={sector} country={country} region={region} />

            <div className="row mb-5">
              <div className="col-lg-12">
                <LineChart
                  pestle={pestle}
                  intensity={intensity}
                  relevance={relevance}
                  likelihood={likelihood}
                />
              </div>
            </div>

            <div className="col-12 mb-5">
              <div className="row mx-1">
                <PieChart
                  country={country}
                  intensity={intensity}
                  relevance={relevance}
                  likelihood={likelihood}
                />

                <RadarChart
                  topic={topic}
                  intensity={intensity}
                  relevance={relevance}
                  likelihood={likelihood}
                />
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-lg-12">
                <BarChart
                  region={region}
                  intensity={intensity}
                  relevance={relevance}
                  likelihood={likelihood}
                />
              </div>
            </div>

            <div className="col-12 mb-5">
              <div className="row mx-1">
                <DonutChart
                  sector={sector}
                  relevance={relevance}
                  intensity={intensity}
                  likelihood={likelihood}
                />

                <PolarChart
                  region={region}
                  intensity={intensity}
                  relevance={relevance}
                  likelihood={likelihood}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
