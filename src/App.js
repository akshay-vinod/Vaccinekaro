import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Search from "./components/Search";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const result = await axios(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${query}&date=04-05-2021`
      );

      console.log(result.data.sessions);

      setData(result.data.sessions);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Search getQuery={(q) => setQuery(q)} />
    </div>
  );
};

export default App;
