import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from "../src/style/GlobalStyle"
import LandingPage from "../src/pages/LandingPage/LandingPages"
import QuemSomos from "../src/pages/QuemSomos/QuemSomos"
import Login from '../src/pages/login/Login'
import PaginaHome from './pages/PaginaHome/PaginaHome'
import Produtos from '../src/pages/Produtos/Produtos'
import Contato from '../src/pages/Contato/Contato'
import Cadastro from '../src/pages/cadastro/Cadastro'
import Dashboard from './pages/Dasboard/Dashboard'


const Rotas = () => {
return (
    <BrowserRouter>
        <GlobalStyle />
        <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/PaginaHome" element={<PaginaHome/>} />
        <Route path="/QuemSomos" element={<QuemSomos/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Produtos" element={<Produtos/>} />
        <Route path="/Contato" element={<Contato/>} />
        <Route path="/Cadastro" element={<Cadastro/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />

        </Routes>
    </BrowserRouter>
)
}

export default Rotas