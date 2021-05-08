import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import State from "./State";
import District from "./District";
import "./Search.css";
import "react-calendar/dist/Calendar.css";
const Search = ({ getQuery, getmyDate, Disable, getDistrict, getUpdate }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState(new Date());
  const [stateSelect, setStateSelect] = useState();

  const onInput = (q) => {
    setText(q);
    getQuery(q);
  };
  const onChange = (date) => {
    setDate(date);

    var options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    var newdate = date.toLocaleDateString("in", options).replace(/\//g, "-");
    getmyDate(newdate);
  };
  useEffect(() => {
    //console.log(stateSelect);
    getUpdate(stateSelect);
    getDistrict();
  }, [stateSelect]);

  return (
    <div className="search-container">
      <div>
        <Calendar onChange={onChange} value={date} />
      </div>
      <div className={Disable ? "disble-pincode" : "state-district"}>
        <State selectState={(s) => setStateSelect(s)} />
        <District
          stateSelected={stateSelect}
          selectDistrict={(d) => getDistrict(d)}
        />
      </div>
      <div className={Disable ? "search" : "disble-pincode"}>
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="pincode"
            maxLength="6"
            value={text}
            onChange={(e) => onInput(e.target.value)}
            type="text"
            pattern="\d*"
          />

          <button className="search-button">
            <i className="fas fa-search" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
