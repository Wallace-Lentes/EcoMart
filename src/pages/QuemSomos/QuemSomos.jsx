import React from "react";
import {StyleQuemSomos} from "../QuemSomos/quemsomos.style"
import Footer from "../../components/views/LandingPage/Footer/Footer";
import Header from "../../components/views/LandingPage/Header/Header";
import reciclagem from "/reciclagem.svg"

const QuemSomos = () => {
  return (
    <>
      <Header></Header>
      <StyleQuemSomos>
            <h2> Conheça mais da nossa Historia </h2>
            <h3> Ecomart, Transformando Resíduos em Sustentabilidade! </h3>
              <div>
            <p>
              Na Ecomart, acreditamos que a sustentabilidade é um círculo
              virtuoso, nossa plataforma online inovadora oferece a todos a
              oportunidade de fazer parte dessa mudança.
              No centro de nossa visão está a ideia simples: troque seu lixo
              reciclável por produtos sustentáveis. Nós capacitamos pessoas a
              transformar resíduos em recursos, promovendo a responsabilidade
              ambiental de forma prática. Com a Ecomart, a reciclagem ganha
              vida, gerando um impacto positivo que se estende a comunidades e
              ao planeta. Junte-se a nós no caminho para um mundo mais verde,
              onde cada ação conta.
              Na Ecomart, somos mais do que uma plataforma - somos agentes de
              mudança, impulsionando uma revolução ecológica. Faça parte desse
              círculo virtuoso e descubra como pequenas ações individuais podem
              ter um grande impacto global.
              Junte-se à Ecomart hoje e ajude-nos a criar um futuro mais
              sustentável para todos! 💚
            </p> 
            <img className='foto'src={reciclagem} alt="" />
      </div>
      
        </StyleQuemSomos>
      <Footer></Footer>
    </>
  );
};
export default QuemSomos;
