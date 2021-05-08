import React, { useState, useEffect } from "react";
import "./State.css";
const District = ({ selectDistrict, stateSelected }) => {
  const [districtList, setDistrictList] = useState([]);
  const [district, setDistrict] = useState("default");
  const [option, setOption] = useState(true);
  const districtChange = (d) => {
    selectDistrict(d);
    setDistrict(d);
    setOption((prevOption) => !prevOption);
  };
  useEffect(() => {
    //console.log(stateSelected);
    const fetchDistrict = () => {
      console.log(stateSelected);
      fetch(
        `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateSelected}`
      )
        .then((response) => response.json())
        .then((data) => {
          setDistrictList(data.districts);
        });
    };
    fetchDistrict();
    //console.log(state[0]);
  }, [stateSelected]);
  return (
    <div className="select">
      <select
        name="slct"
        onChange={(d) => districtChange(d.target.value)}
        value={district}
      >
        <option className={option ? "" : "disable-option"} selected value="">
          Choose an District
        </option>
        {districtList.map((items) => {
          return (
            <option value={items.district_id}>{items.district_name}</option>
          );
        })}
      </select>
    </div>
  );
};

export default District;
