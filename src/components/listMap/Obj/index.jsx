import React from "react";

const ObjList = ({ value, type, description }) => {
  return (
    <li className="obj-li">
      <div className="left-container">
        <h2 className="value-description">{description}</h2>
        <p className="value-type">{type}</p>
      </div>
      <div className="right-container">
        <p className="value">{value}</p>
        <button className="remove-value">🗑️</button>
      </div>
    </li>
  );
};

export default ObjList;
