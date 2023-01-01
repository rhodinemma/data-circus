import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [dataSet, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let response = await axios.get("http://localhost:5000/getAllData");
    setData(response.data.data);
  };

  return <div className="App">{dataSet.map((data) => data.sector)}</div>;
}

export default App;
