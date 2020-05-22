import React from "react";
import Conversor from "./components/Conversor";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Conversor de moedas</h1>
      <div className="linha">
        <Conversor moedaA="BRL" moedaB="USD"></Conversor>
        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
      </div>
      <div className="linha">
        <Conversor moedaA="BRL" moedaB="CAD"></Conversor>
        <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
      </div>
      <div className="linha">
        <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
      </div>
    </div>
  );
};

export default App;
