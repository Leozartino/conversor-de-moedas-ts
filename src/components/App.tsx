import React from "react";
import "./style.css";
import Conversor from "./Conversor";

const App: React.FC = () => {
  return (
    <div className="app">
      <Conversor moedaA="USD" moedaB="BRL"></Conversor>
    </div>
  );
};

export default App;
