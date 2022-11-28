import React from "react";

export const Filters = ({ setFilter }) => {
  return (
    <div className="container-filters">
      <h2 className="filters-title">Resumo financeiro</h2>
      <div className="div-buttons">
        <button
          className="filters filters-selected"
          id="todos"
          onClick={() => setFilter("todos")}
        >
          Todos
        </button>
        <button
          className="filters"
          id="entrada"
          onClick={() => setFilter("Entrada")}
        >
          Entrada
        </button>
        <button
          className="filters"
          id="saida"
          onClick={() => setFilter("Saida")}
        >
          Saida
        </button>
      </div>
    </div>
  );
};
