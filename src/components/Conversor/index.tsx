import React, { useState } from "react";
import "./style.css";

interface ConversorProps {
  moedaA: string;
  moedaB: string;
}

const Conversor: React.FC<ConversorProps> = ({
  moedaA,
  moedaB,
}: ConversorProps) => {
  const [moedaInput, setMoedasInput] = useState<string>();
  const [moedaOutput, setMoedasOutput] = useState<number>();

  function converteMoeda() {
    let tipoMoeda = `${moedaA}_${moedaB}`;

    let url = `https://free.currconv.com/api/v7/convert?apiKey=30122d3ece076927d70e&q=${tipoMoeda}&compact=y`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const cotacao = json[tipoMoeda].val;

        const moedaConvertida = Number(moedaInput) * cotacao;

        setMoedasOutput(moedaConvertida);
      });
  }

  return (
    <div className="conversor">
      <h2>
        {moedaA} para {moedaB}
      </h2>
      <input
        type="text"
        onChange={(event) => {
          setMoedasInput(event.target.value);
        }}
      />
      <input type="button" value="Converter" onClick={converteMoeda} />
      <h2>valor convertido: {moedaOutput}</h2>
    </div>
  );
};

export default Conversor;
