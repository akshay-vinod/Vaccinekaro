import React, { useState, useEffect } from "react";
import "./Info.css";
import Loader from "./ui/Loader";
const Info = ({ data, load, switchState }) => {
  /*const [avail, setAvail] = useState(false);
  useEffect(() => {
    if (!switchState) {
      setAvail(false);
      data.map((items) =>
        items.sessions[0].available_capacity > 0 ? setAvail(true) : ""
      );
    } else setAvail(true);
    //console.log(JSON.stringify(data));
  }, [data, switchState]);*/
  return (
    <div className="info">
      {load ? (
        <Loader />
      ) : data.length ? (
        <div className="card">
          {data.map((items) =>
            switchState ? (
              <div className="slot-list">
                <div>{items.name} </div>
                <div>
                  <button className="slots">{items.available_capacity}</button>
                </div>
              </div>
            ) : (
              <div className="slot-list">
                <div>{items.name} </div>
                <div>
                  <button
                    className={
                      items.sessions[0].available_capacity > 0
                        ? "slots slot-available"
                        : "slots no-slot"
                    }
                  >
                    {items.sessions[0].available_capacity > 0
                      ? items.sessions[0].available_capacity
                      : "booked"}
                  </button>
                </div>
              </div>
            )
          )}
          {/*<div className="slot-list">{avail ? "" : "no slot"}</div>*/}
        </div>
      ) : (
        <div className="">
          <div className="card slot-list">
            No Vaccination center is available for booking
          </div>
        </div>
      )}
    </div>
  );
};

export default Info;
