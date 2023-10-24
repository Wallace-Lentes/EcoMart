import React, { useState } from 'react'
import Button from '../common/Button/Button'
import Notificacao from '../Notificacao/Notificacao'
import styled from 'styled-components'

const Card = ({id, titulo, img, valor, loja, descricao}) => {
  
  const [notificacaoAberta, setNotificacaoAberta] = useState(false);

  const handleClick = () => {
    setNotificacaoAberta(true);
    setTimeout(() => {
      setNotificacaoAberta(false);
    }, 2000);
  };


  return (
    <StyledCard className="cardProduto">
      <img className='imgProdutos' src={img} alt={titulo} />
      <h2>{titulo}</h2>
      <p>{descricao}</p>
      <p> {loja}</p>
      <p>Valor: ${valor}</p>
      <Button texto='Adicionar ao carrinho' variant='primary' onClick={handleClick} />
      
    </StyledCard>
  )
}

export default Card

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  margin-top: 24px;
  margin-left: 20%;
  gap: 16px;
  max-width: 400px;
  padding: 40px;
  background: #95d195;
  border-radius: 16px;
  box-shadow:  9px 6px  #364936;
`