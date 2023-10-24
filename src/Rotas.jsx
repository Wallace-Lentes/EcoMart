import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from "../src/style/GlobalStyle"
//import { tema } from "./src/style/theme"
import LandingPage from "../src/pages/LandingPage/LandingPages"
import QuemSomos from "../src/pages/QuemSomos/QuemSomos"
import Login from '../src/pages/login/Login'
import PaginaHome from './pages/PaginaHome/PaginaHome'
import Produtos from '../src/pages/Produtos/Produtos'

const Rotas = () => {
return (
    <BrowserRouter>
        <GlobalStyle />
        <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/paginaHome" element={<PaginaHome/>} />
        <Route path="/quemSomos" element={<QuemSomos/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/produtos" element={<Produtos/>} />
        </Routes>
    </BrowserRouter>
)
}

export default Rotas