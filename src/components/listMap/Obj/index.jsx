import React from "react";

const ObjList = ({ value, type, description, removeValue }) => {
  return (
    <li className={`obj-li ${type === "Entrada" ? "green-left" : "grey-left"}`}>
      <div className="left-side">
        <h2 className="value-description">{description}</h2>
        <p className="value-type">{type}</p>
      </div>
      <div className="right-side">
        <p className="value">{`R$ ${value}`}</p>
        <button
          className="remove-value"
          onClick={() => removeValue(description)}
        >
          🗑️
        </button>
      </div>
    </li>
  );
};

export default ObjList;
