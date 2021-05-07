import React, { useState } from "react";
import "./Switch.css";
import "react-calendar/dist/Calendar.css";
const Switch = ({ getToggleState, resetData }) => {
  const [search, setSearch] = useState(true);
  const toggle = () => {
    setSearch((prevSearch) => !prevSearch);
    getToggleState(search);
    resetData([]);
  };
  return (
    <div>
      <div className="switch_box box_1">
        <div>
          <label className="switch-container">
            <p>{search ? "State" : "Pincode"}</p>
            <input type="checkbox" onClick={toggle} className="switch_1" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Switch;
