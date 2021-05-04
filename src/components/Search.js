import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <div className="search-container">
      <div className="search">
        <div class="search-box">
          <input type="text" class="search-input" placeholder="Search.." />

          <button class="search-button">
            <i class="fas fa-search" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
