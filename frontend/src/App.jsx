import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import LineChart from "./LineChart";
import BarChart from "./BarChart";

function App() {
  const [dataSet, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let response = await axios.get("http://localhost:5000/getAllData");
    setData(response.data.data);
  };

  //return <LineChart Data={dataSet} />;
  return <BarChart />;
}

export default App;
