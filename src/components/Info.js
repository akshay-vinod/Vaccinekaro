import React from "react";
import Loader from "./ui/Loader";
const Info = ({ data, load }) => {
  return (
    <div className="info-margin">
      {load ? (
        <Loader />
      ) : (
        <h1>
          {data.map(
            (items) => items.name + ": " + items.available_capacity + "  "
          )}
        </h1>
      )}
    </div>
  );
};

export default Info;
