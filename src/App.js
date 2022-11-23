import { useState } from "react";
import "./App.css";

import Dashboard from "./components/Dashboard";

function App() {
  const [shown, isShown] = useState(true);

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
        ""
      )}
    </div>
  );
}

export default App;
