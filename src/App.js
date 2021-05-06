import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Search from "./components/Search";
import Info from "./components/Info";
//import Switch from "./components/ui/Switch";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [forDate, setForDate] = useState(
    new Date()
      .toLocaleDateString("in", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/\//g, "-")
  );
  //const [dataStatus, setDataStatus] = useState(true);
  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const result = await axios(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${query}&date=${forDate}`
      );

      //console.log(forDate);

      setData(result.data.sessions);
      //if (data.length === 0) setDataStatus(false);
      setIsLoading(false);
    };

    fetchItems();
  }, [query, forDate]);

  return (
    <div className="container">
      <Search getQuery={(q) => setQuery(q)} getmyDate={(d) => setForDate(d)} />
      <Info data={data} load={isLoading} />
    </div>
  );
};

export default App;
