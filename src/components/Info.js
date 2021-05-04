import React from "react";

const Info = ({ data, load }) => {
  return (
    <div>
      {load ? (
        <h1>loading</h1>
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
