import "../../globalstyles.css";
import "./style.css";
import img1 from "../../imgs/dashboardimg.svg";

function Dashboard({ changePage }) {
  return (
    <div className="Dashboard-container">
      <div className="left-container">
        <h1 className="comp-namee">
          <span className="color-brand">Nu</span> Kenzie
        </h1>
        <h2 className="comp-slogan">
          Centralize o controle das suas fincanças
        </h2>
        <p className="comp-slogan2">de forma rápida e segura</p>
        <button type="button" className="dashboard-button" onClick={changePage}>
          Iniciar
        </button>
      </div>
      <img src={img1} alt="" />
    </div>
  );
}

export default Dashboard;
