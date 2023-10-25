import {StylePaginaHome} from "../PaginaHome/paginaHome.style"
import Header from "../../components/views/LandingPage/Header/Header"
import BannerMundo from "../../components/views/LandingPage/BannerMundo/BannerMundo"
import Footer from "../../components/views/LandingPage/Footer/Footer"

const PaginaHome = () => {

  return (
    <StylePaginaHome>
        <Header />
        <BannerMundo />
        < Footer />
    </StylePaginaHome>
  )
}

export default PaginaHome