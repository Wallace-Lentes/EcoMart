import React from 'react'

const Card = ({id, titulo, img, valor, loja, descricao}) => {
  return (
    <div className="cardProduto">
      <img src={img} alt={titulo} />
      <h2>{titulo}</h2>
      <p>{descricao}</p>
      <p> {loja}</p>
      <p>Valor: ${valor}</p>
      <button>Adicionar ao carrinho</button>
    </div>
  )
}

export default Card