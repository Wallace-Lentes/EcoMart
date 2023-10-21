import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from "./src/style/GlobalStyle"
//import { tema } from "./src/style/theme"
import LandingPage from "./src/pages/LandingPage/LandingPages"
import QuemSomos from "./src/pages/QuemSomos/QuemSomos"

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