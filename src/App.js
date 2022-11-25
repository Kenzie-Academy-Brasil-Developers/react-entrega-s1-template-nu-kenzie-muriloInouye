import { useState } from "react";

import Dashboard from "./components/Dashboard";
import { ValuesList } from "./components/listMap";
import { MainPage } from "./pages/mainPage";

function App() {
  const [shown, isShown] = useState(true);

  const [valuesList, setValuesList] = useState(list);

  function addValue(list) {
    setValuesList([...valuesList, list]);
  }

  return (
    <div className="App">
      {shown ? (
        <Dashboard render={true}>
          <button
            type="button"
            className="dashboard-button"
            onClick={() => isShown(!shown)}
          >
            Iniciar
          </button>
        </Dashboard>
      ) : (
        <MainPage addValue={addValue} valuesList={valuesList} />
      )}
    </div>
  );
}

export const list = [
  {
    value: 1200.0,
    type: "Entrada",
    description: "salario kenzie",
  },
  {
    value: 1130.12,
    type: "Saida",
    description: "PS5 comprado",
  },
];

export default App;
