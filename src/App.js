import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Search from "./components/Search";
import Info from "./components/Info";
import Switch from "./components/ui/Switch";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  //for toggling
  const [toggle, setToggle] = useState(false);
  //for district
  const [district, setDistrict] = useState();
  //for error free
  //const [errorFree, setErrorFree] = useState(false);
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
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/${
          toggle
            ? "findByPin?pincode=" + query
            : "calendarByDistrict?district_id=" + district
        }&date=${forDate}`
      );
      //console.log(JSON.stringify(result.data));
      setData(toggle ? result.data.sessions : result.data.centers);
      //if (data.length === 0) setDataStatus(false);
      setIsLoading(false);
    };

    fetchItems();
  }, [query, forDate, district, toggle]);

  return (
    <div className="container">
      <Switch
        resetData={(clear) => setData(clear)}
        getToggleState={(t) => setToggle(t)}
      />
      <Search
        Disable={toggle}
        getQuery={(q) => setQuery(q)}
        getmyDate={(d) => setForDate(d)}
        getDistrict={(dis) => setDistrict(dis)}
      />
      <Info switchState={toggle} data={data} load={isLoading} />
    </div>
  );
};

export default App;
