import React from "react";
import "./Info.css";
import Loader from "./ui/Loader";
const Info = ({ status, data, load }) => {
  return (
    <div className="info">
      {load ? (
        <Loader />
      ) : data.length ? (
        <div className="info-data">
          {data.map((items) => (
            <div>
              {items.name} {items.available_capacity}
            </div>
          ))}
        </div>
      ) : (
        <p>no slot</p>
      )}
    </div>
  );
};

export default Info;
