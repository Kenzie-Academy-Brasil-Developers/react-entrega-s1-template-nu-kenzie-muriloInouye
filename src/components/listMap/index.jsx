import React from "react";
import ObjList from "./Obj";

export const ValuesList = ({ valuesList }) => {
  console.log(valuesList);
  return (
    <ul>
      {valuesList.map((obj, index) => (
        <ObjList
          key={index}
          value={obj.value}
          type={obj.type}
          description={obj.description}
        />
      ))}
    </ul>
  );
};
