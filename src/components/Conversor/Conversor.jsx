

import React, { useState } from 'react';

const Materiais ={
  papel: {
    valorDinheiro: 0.5,
    valorPontos: 5,
  },
  aluminio: {
    valorDinheiro: 1.25,
    valorPontos: 12.5,
  },
  plastico: {
    valorDinheiro: 0.5,
    valorPontos: 5,
  },
  vidro: {
    valorDinheiro: 0.2,
    valorPontos: 2,
  },
  pilha: {
    valorDinheiro: 0.3,
    valorPontos: 3,
  },
};


  const [materialSelecionado, setMaterialSelecionado] = useState('papel');
  const [quantidadeKg, setQuantidadeKg] = useState(0);
  const [valorDinheiro, setValorDinheiro] = useState(0);
  const [valorPontos, setValorPontos] = useState(0);


    const materialInserido = reciclagem[materialSelecionado];
    const valorDinheiroCalculado = quantidadeKg * materialInserido.valorDinheiro;
    const valorPontosCalculado = quantidadeKg * materialInserido.valorPontos;

    setValorDinheiro(valorDinheiroCalculado);
    setValorPontos(valorPontosCalculado);
  


  return (
    <div>
      
    </div>
  );

export default Conversor;
