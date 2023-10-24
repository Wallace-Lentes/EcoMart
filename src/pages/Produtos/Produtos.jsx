import React from 'react'
import  Card from '../../components/Card/Card'
import { useState } from 'react'

const Produtos = () => {
  
  const [addProdutos,setAddProdutos]=useState()

  return (
    <div className='produtos'> 
    <Card
    id={1} 
    titulo= "Absorventes Sustentáveis"
    img= "/absorvente.jpeg"
    valor= {35.90}
    loja= "Kotui"
    />

    <Card 
    id={2} 
    titulo= "Coletor Menstrual"
    img= "/coletor.jpg"
    valor= {56.90}
    loja= "Ó o ciclo"
    />

    <Card
    id={3}
    titulo= "Escovas de bambu"
    img= "/escovas.jpeg"
    valor= {9.80}
    loja= "Bambu Global"
    />

    <Card
    id={4}
    titulo= "Kit shampoo e condicionador em barra"
    img= "/barras.jpeg"
    valor= {74.90}
    loja= "UseHob"
    />

    <Card
    id={5}
    titulo= "Cesta básica"
    img= "/cestaBasica.jpg"
    valor= {528.89}
    loja= "Supermercado do Povo"
    />

    </div>
  )
}

export default Produtos