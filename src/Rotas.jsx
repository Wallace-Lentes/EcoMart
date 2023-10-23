import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from "./style/GlobalStyle"
//import { tema } from "./src/style/theme"
import QuemSomos from "./pages/QuemSomos/QuemSomos"
import PaginaHome from './pages/PaginaHome/PaginaHome'
import Login from "./pages/login/Login"

const Rotas = () => {
return (
    <BrowserRouter>
        <GlobalStyle />
        <Routes>
        <Route path="/" component={<PaginaHome />} />
        <Route path="/ Quem Somos" component={<QuemSomos />} />
        <Route path="/ Login" component={<Login />} />
        </Routes>
    </BrowserRouter>
)
}

export default Rotas