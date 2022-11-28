import { useState } from "react";

import Dashboard from "./components/Dashboard";
import { MainPage } from "./pages/mainPage";

function App() {
  const [shown, isShown] = useState(true);

  const [valuesList, setValuesList] = useState(list);

  const [filter, setFilter] = useState("todos");

  const filteredValues = valuesList.filter((value) =>
    filter === "todos" ? true : value.type === filter
  );

  function addValue(list) {
    setValuesList([...valuesList, list]);
  }

  function removeValue(valueName) {
    const newList = valuesList.filter(
      (value) => value.description !== valueName
    );
    setValuesList(newList);
  }

  function changePage() {
    isShown(!shown);
  }

  return (
    <div className="App">
      {shown ? (
        <Dashboard changePage={changePage} />
      ) : (
        <MainPage
          changePage={changePage}
          addValue={addValue}
          valuesList={filteredValues}
          removeValue={removeValue}
          setFilter={setFilter}
        />
      )}
    </div>
  );
}

export const list = [];

export default App;
