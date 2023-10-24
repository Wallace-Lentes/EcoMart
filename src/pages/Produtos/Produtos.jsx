import React from "react";
import Card from "../../components/Card/Card";
import { useState } from "react";
import Header from "../../components/views/LandingPage/Header/Header";
import Footer from "../../components/views/LandingPage/Footer/Footer"
import styled from "styled-components";

const Produtos = () => {
  // const [carrinho, setCarrinho] = useState([]);
  // const handleClick=()=>{

    //essa funcao add o produto da lista de produtos, ao lista do carrinho
    // 1a 

  //   const addProduto={Card(id)}

  // }

  return (
    <>
    
      <Header />
    <StyledProdutos className="produtos">

      <Card
        id={1}
        titulo="Kit shampoo e condicionador em barra"
        img="/barras.jpeg"
        valor={74.9}
        loja="UseHob"
      />
      <Card
        id={2}
        titulo="Escovas de bambu"
        img ="/escovas.jpeg"
        valor={9.8}
        loja="Bambu Global"
      />

      <Card
        id={3}
        titulo="Cesta básica"
        img="/cestaBasica.jpg"
        valor={528.89}
        loja="Supermercado do Povo"
      />

      <Card
        id={4}
        titulo="Absorventes Sustentáveis"
        img="/absorvente.jpeg"
        valor={35.9}
        loja="Kotui"
      />

      <Card
        id={5}
        titulo="Coletor Menstrual"
        img="/coletor.jpg"
        valor={56.9}
        loja="Ó o ciclo"
      />
    </StyledProdutos>
    <Footer/>
    </>
  );
};



const StyledProdutos = styled.div`
  max-width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export default Produtos;