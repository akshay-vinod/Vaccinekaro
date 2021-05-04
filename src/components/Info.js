import React from "react";
import Loader from "./ui/Loader";
const Info = ({ status, data, load }) => {
  return (
    <div className="info-margin">
      {load ? (
        <Loader />
      ) : data.length ? (
        <h1>
          {data.map(
            (items) => items.name + ": " + items.available_capacity + "  "
          )}
        </h1>
      ) : (
        <h1>no slot</h1>
      )}
    </div>
  );
};

export default Info;
