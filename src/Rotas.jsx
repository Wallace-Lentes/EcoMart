import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from "./style/GlobalStyle"
//import { tema } from "./src/style/theme"
import LandingPage from "./pages/LandingPage/LandingPages"
import QuemSomos from "./pages/QuemSomos/QuemSomos"

const Rotas = () => {
return (
    <BrowserRouter>
        <GlobalStyle />
        <Routes>
        <Route path="/" component={<LandingPage />} />
        <Route path="/ Quem Somos" component={<QuemSomos />} />
        </Routes>
    </BrowserRouter>
)
}

export default Rotas