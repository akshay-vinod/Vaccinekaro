import React, { useState } from "react";
import "./Search.css";
const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <div className="search-container">
      <div className="search">
        <div className="search-box">
          <input
            type="number"
            className="search-input"
            placeholder="Search.."
            value={text}
            onChange={(e) => onChange(e.target.value)}
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
