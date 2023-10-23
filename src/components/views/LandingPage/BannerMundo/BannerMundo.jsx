import React from 'react'
import planeta from "../../../../assets/planeta.svg"

const BannerMundo = () => {
    return (
        <StyleContainer>
            <div className="content">
            <div className="textos">
                <h2>Bem-vindo a EcoMart </h2>
    
                <h3>
                Recicle, acumule pontos e desfrute de recompensas!
                </h3>
    
                <p>
                Aqui na Ecomart seu lixo reciclado se tranforma em materia prima para pequenos artesões! Além de acular pontos e trocar por beneficios você ainda ajuda o planeta com o descarte correto dos Materiais.
                </p>
            </div>
    
            <picture>
                <img src={planeta} alt="" />
            </picture>
            </div>
        </StyleContainer>
    );
};

export default BannerMundo