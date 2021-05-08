import React, { useEffect, useState } from "react";
import "./State.css";

const State = ({ selectState }) => {
  const [list, setList] = useState([]);
  //const [state, setState] = useState();
  useEffect(() => {
    const fetchState = () => {
      fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/states`)
        .then((response) => response.json())
        .then((data) => {
          setList(data.states);
        });
    };
    fetchState();
    //console.log(state[0]);
  }, []);
  const onClick = (data) => {
    //console.log(data);
    selectState(data);
  };

  return (
    <div className="select">
      <select onChange={(e) => onClick(e.target.value)} name="slct" id="slct">
        <option selected disabled value="">
          Choose an State
        </option>

        {list.map((items) => {
          return <option value={items.state_id}>{items.state_name}</option>;
        })}
      </select>
    </div>
  );
};

export default State;
