import React, { useState } from "react";
import "./style.css";

interface ConversorProps {
  moedaA: string;
  moedaB: string;
}

interface jsonDTO {
  TypeA_TypeB: {
    val: number;
  };
}

const Conversor: React.FC<ConversorProps> = ({
  moedaA,
  moedaB,
}: ConversorProps) => {
  const [moedaInput, setMoedasInput] = useState<string>("");
  const [moedaOutput, setMoedasOutput] = useState<string>();

  function converteMoeda() {
    let tipoMoeda = `${moedaA}_${moedaB}`;

    let url = `https://free.currconv.com/api/v7/convert?apiKey=30122d3ece076927d70e&q=${tipoMoeda}&compact=y`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json: jsonDTO) => {
        const cotacao: number = json.TypeA_TypeB.val;
        const valorMoedaNumerico: number = parseFloat(moedaInput);

        const moedaConvertida: string = (valorMoedaNumerico * cotacao).toFixed(
          2
        );

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
