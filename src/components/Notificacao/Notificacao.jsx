import React, { useEffect, useState } from 'react'

    const Notificacao = ({ taAberto, fecharNotificacao }) => {
        useEffect(() => {
          if (taAberto === true) {
            setTimeout(() => {
              fecharNotificacao()
            }, 2000)
          }
        }, [taAberto])
  
    return (
        <div> Notificação </div>
  )
}

export default Notificacao