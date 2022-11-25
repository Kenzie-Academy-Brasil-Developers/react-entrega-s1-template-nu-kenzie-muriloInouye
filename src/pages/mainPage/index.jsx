import React from "react";
import { list } from "../../App";
import { Form } from "../../components/Form";
import { ValuesList } from "../../components/listMap";

export const MainPage = ({ addValue, valuesList }) => {
  return (
    <div>
      <Form addValue={addValue} />
      <ValuesList valuesList={valuesList} />
    </div>
  );
};
