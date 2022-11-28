import React from "react";

export const Header = ({ changePage }) => {
  return (
    <header className="box-shadow">
      <div className="container header-container">
        <h1 className="comp-name">
          <span className="color-brand">Nu</span> Kenzie
        </h1>
        <button className="changePage-btn" onClick={changePage}>
          Inicio
        </button>
      </div>
    </header>
  );
};
