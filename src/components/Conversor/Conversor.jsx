import React, { useState } from "react";
import { ConversorStyle } from "./conversor.style";
import Button from "../common/Button/Button";

const Conversor = () => {
  const conversor = (material, qtdKg) => {
    if (material === "papel" || material === "plastico") {
      return qtdKg * 5;
    }

    if (material === "aluminio") {
      return qtdKg * 12.5;
    }

    if (material === "vidro") {
      return qtdKg * 2;
    }

    if (material === "pilha") {
      return qtdKg * 3;
    }
  };

  const [materialSelecionado, setMaterialSelecionado] = useState("");
  const [quantidadeKg, setQuantidadeKg] = useState("");
  const [valorPontos, setValorPontos] = useState("");
  const [error, setError] = useState(false);

  return (
    <ConversorStyle>
      <h3> Simule abaixo a quantidade equivalente para cada material</h3>
      <div className="material">
        <label htmlFor="">Selecione um material:</label>
        <select
          name=""
          id=""
          onChange={(e) => setMaterialSelecionado(e.target.value)}
        >
          <option value="">Selecione</option>
          <option>papel</option>
          <option>aluminio</option>
          <option>plastico</option>
          <option>vidro</option>
          <option>pilha</option>
        </select>
      </div>

      <div className="valor">
        <label htmlFor="">Quantidade em kg:</label>
        <input type="text" onChange={(e) => setQuantidadeKg(e.target.value)} />
      </div>

      <Button
        texto={"Converter"}
        variant={"primary"}
        width={'320pxo'}
        onClick={() => {
          if (materialSelecionado === "") {
            setError(true);

            setTimeout(() => {
              setError(false);
            }, 3000);
          } else if (quantidadeKg === "") {
            setError(true);

            setTimeout(() => {
              setError(false);
            }, 3000);
          } else {
            setValorPontos(conversor(materialSelecionado, quantidadeKg));
            setTimeout(() => {
              setValorPontos('')
            }, 5000)
          }
        }}
      />

      <div className="pontos">
        {valorPontos && (
          <>
            <p>
              O resultado do material {materialSelecionado} é {valorPontos}{" "}
              pontos e em dinheiro é R${valorPontos/2}{" "}
            </p>
          </>
        )}

        { 
          error && <p>Você precisa preencher todas opções</p>
        }
      </div>
    </ConversorStyle>
  );
};

export default Conversor;
