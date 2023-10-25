import React from 'react'

const reciclagem = {
    papel :{
        valorDinheiro:0.5, 
        valorPontos: 5
    },
    aluminio:{
        valorDinheiro: 1.25,
        valorPontos: 12.5
    },
    plastico:{
        valorDinheiro: 0.5,
        valorPontos: 5
    },
    vidro:{
        valorDinheiro: 0.2, 
        valorPontos: 2
    },
    pilha:{ 
        valorDinheiro: 0.3,
        valorPontos:3
    }
}
return (
    <div>
        <h2>Selecione um Material:</h2>
            <select value={selectedMaterial} onChange={handleMaterialChange}>
                <option value="">Selecione um material</option>
                <option value="Madeira">Madeira</option>
                <option value="Metal">Metal</option>
                <option value="Plástico">Plástico</option>
                <option value="Vidro">Vidro</option>
            </select>
        <p>Você escolheu: {selectedMaterial}</p>
    </div>
);


export default Conversor