import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from "../EcoMart/src/style/GlobalStyle"
//import { tema } from "./src/style/theme"
import LandingPage from "./src/pages/LandingPage/LandingPages"
import QuemSomos from "./src/pages/QuemSomos/QuemSomos"
import Login from './src/pages/login/Login'

const Rotas = () => {
return (
    <BrowserRouter>
        <GlobalStyle />
        <Routes>
        <Route path="/" component={<LandingPage />} />
        <Route path="/ Quem Somos" component={<QuemSomos />} />
        <Route path="/ Login" component={<Login />} />
        </Routes>
    </BrowserRouter>
)
}

export default Rotas