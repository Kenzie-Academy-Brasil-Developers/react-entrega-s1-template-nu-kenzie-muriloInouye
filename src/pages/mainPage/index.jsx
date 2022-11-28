import React from "react";
import { Form } from "../../components/Form";
import { ValuesList } from "../../components/listMap";
import { Filters } from "../../components/Filters";
import { Header } from "../../components/Header";

export const MainPage = ({
  addValue,
  valuesList,
  removeValue,
  setFilter,
  changePage,
}) => {
  return (
    <div>
      <Header changePage={changePage} />
      <div className="container main-container">
        <Form addValue={addValue} />
        <div className="ul-container">
          <Filters setFilter={setFilter} />
          <ValuesList valuesList={valuesList} removeValue={removeValue} />
        </div>
      </div>
    </div>
  );
};
