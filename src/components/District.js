import React from "react";
import "./State.css";
const District = ({ selectDistrict }) => {
  const districtChange = (d) => {
    selectDistrict(d);
  };
  return (
    <div className="select">
      <select
        name="slct"
        onChange={(d) => districtChange(d.target.value)}
        id="select"
      >
        <option selected disabled value="">
          Choose an option
        </option>
        <option value="295">Kasaragod</option>
        <option value="296">Thiruvananthapuram</option>
        <option value="297">Kannur</option>
        <option value="298">Kollam</option>
        <option value="299">Wayanad</option>
        <option value="300">Pathanamthitta</option>
        <option value="301">Alappuzha</option>
        <option value="302">Malappuram</option>
        <option value="303">Thrissur</option>
        <option value="304">Kottayam</option>
        <option value="305">Kozhikode</option>
        <option value="306">Idukki</option>
        <option value="307">Ernakulam</option>
        <option value="308">Palakkad</option>
      </select>
    </div>
  );
};

export default District;
