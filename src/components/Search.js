import React, { useState, useEffect } from "react";
import "./Search.css";

const Search = () => {
  const [pincode, setPincode] = useState("");
  const [enter, setEnter] = useState(false);
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(true);
  const [loading, setLoading] = useState(true);
  const axios = require("axios");
  const onChange = (e) => {
    e.persist();
    setPincode(e.target.value);
  };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=04-05-2021`
      );
      setData(result.data.sessions);
      //if (data.length === 0) setStatus(false);
      if (enter) setLoading(false);
    };
    fetchData();
    console.log(data);
  }, [pincode, enter]);
  return (
    <div className="search-container">
      <div className="search">
        <div className="search-box">
          <input
            type="number"
            className="search-input"
            placeholder="Search.."
            onChange={onChange}
          />

          <button className="search-button" onClick={() => setEnter(true)}>
            <i className="fas fa-search" />
          </button>
        </div>
      </div>
      <div>
        {loading ? (
          <h1>loading...</h1>
        ) : (
          <h1>{data.map((items) => items.available_capacity)}</h1>
          /*<section>
            {enter ? (
              data.map((items) => {
                <h1>{items.name}</h1>;
              })
            ) : (
              <h1>No Slot available</h1>
            )}
          </section>*/
        )}
      </div>
    </div>
  );
};

export default Search;
