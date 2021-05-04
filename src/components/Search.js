import React, { useState } from "react";
import Calendar from "react-calendar";
import "./Search.css";
import "react-calendar/dist/Calendar.css";
const Search = ({ getQuery, getmyDate }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState(new Date());
  const [passDate, setPassDate] = useState("");

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

  return (
    <div className="search-container">
      <div>
        <Calendar onChange={onChange} value={date} />
      </div>

      <div className="search">
        <div className="search-box">
          <input
            type="number"
            className="search-input"
            placeholder="pincode"
            value={text}
            onChange={(e) => onInput(e.target.value)}
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
