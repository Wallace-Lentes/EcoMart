import React from 'react'
import  Card from '../../components/Card/Card'


const Produtos = () => {
  
  return (
    <div className='produtos'> 
    <Card> 
    id=1 
    titulo= "Absorventes Sustentáveis"
    img= "src/assets/absorvente.jpeg"
    valor= 35,90
    loja= "Kotui"
    </Card>

    <Card> 
    id=2 
    titulo= "Coletor Menstrual"
    img= "src/assets/coletor.jpg"
    valor= 56,90
    loja= "Ó o ciclo"
    </Card>

    <Card> 
    id=3
    titulo= "Escovas de bambu"
    img= "src/assets/escovas.jpeg"
    valor= 9,80
    loja= "Bambu Global"
    </Card>

    <Card> 
    id=4
    titulo= "Kit shampoo e condicionador em barra"
    img= "src/assets/barras.jpeg"
    valor= 74,90
    loja= "UseHob"
    </Card>

    <Card> 
    id=5
    titulo= "Cesta básica"
    img= "src/assets/cestaBasica.jpg"
    valor= 528,00
    loja= "Supermercado do Povo"
    </Card>
    </div>
  )
}

export default Produtos