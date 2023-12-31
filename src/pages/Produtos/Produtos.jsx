
import React from "react";
import Card from "../../components/Card/Card";
import Header from "../../components/views/LandingPage/Header/Header";
import Footer from "../../components/views/LandingPage/Footer/Footer"
import styled from "styled-components";

const Produtos = () => {

  return (
    <>
      <Header />
    <StyledProdutos className="produtos">

      <Card
        id={1}
        titulo="Kit shampoo e condicionador em barra"
        img="/barras.jpeg"
        valor={74.90}
        loja="Loja Parceira: UseHob"
      />
      <Card
        id={2}
        titulo="Escova dental de bambu"
        img ="/escovas.jpeg"
        valor={9.80}
        loja="Loja Parceira: Bambu Global"
      />

      <Card
        id={3}
        titulo="Kit Marmita Sustentável"
        img="/marmita.jpg"
        valor={47.90}
        loja="Loja Parceira: Marmitando"
      />
      <Card
        id={4}
        titulo="Absorventes Sustentáveis"
        img="/absorvente.jpeg"
        valor={35.90}
        loja="Loja Parceira: Kotui"
      />

      <Card
        id={5}
        titulo="Coletor Menstrual"
        img="/coletor.jpg"
        valor={56.90}
        loja="Loja Parceira: Ó o ciclo"
      />
      <Card
        id={6}
        titulo="Cesta básica"
        img="/cestaBasica.jpg"
        valor={528.89}
        loja="Loja Parceira: Supermercado do Povo"
      />
     
    </StyledProdutos>
    <Footer/>
    </>
  );
};


const StyledProdutos = styled.div`
  max-width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: #F5F6EE;
  margin-bottom: 20px;
  `

export default Produtos;

