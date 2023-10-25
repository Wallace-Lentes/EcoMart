import React, { useEffect } from 'react'
import styled from 'styled-components'

    const Notificacao = ({ taAberto, fecharNotificacao }) => {
        useEffect(() => {
          if (taAberto === true) {
            setTimeout(() => {
              fecharNotificacao()
            }, 2000)
          }
        }, [taAberto])
  
    return (
        <StyleNotificacao> Troque na unidade mais próxima </StyleNotificacao>
  )
}

export default Notificacao

const StyleNotificacao = styled.div`
  width: fit-content;
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 10vh;
  left: 50%;
  border: 2px solid ${props => props.theme.green00};
  border-radius: 8px;
  box-shadow:  6px 6px 5px #013B0E80;
  background: #F5F6EE;
  color: ${props => props.theme.green500};

  &.sucesso{
    color: ${props => props.theme.green400};
  }

`