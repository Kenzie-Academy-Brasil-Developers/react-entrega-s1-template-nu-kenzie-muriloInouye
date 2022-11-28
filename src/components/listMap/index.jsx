import React, { useState } from "react";
import ObjList from "./Obj";
import img2 from "../../imgs/NoCard.svg";

export const ValuesList = ({ valuesList, removeValue }) => {
  console.log(valuesList);
  return valuesList.length === 0 ? (
    <ul className="ul-values">
      <h2 className="no-values">Você ainda não possui nenhum lançamento</h2>
      <img src={img2} alt="" />
    </ul>
  ) : (
    <ul className="ul-values">
      {valuesList.map((obj, index) => (
        <ObjList
          key={index}
          value={obj.value}
          type={obj.type}
          description={obj.description}
          removeValue={removeValue}
        />
      ))}
    </ul>
  );
};
