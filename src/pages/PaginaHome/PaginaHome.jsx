import {StylePaginaHome} from "../PaginaHome/paginaHome.style"
import Header from "../../components/views/LandingPage/Header/Header"
import BannerMundo from "../../components/views/LandingPage/BannerMundo/BannerMundo"

const PaginaHome = () => {

  return (
    <StylePaginaHome>
        <Header />
        <BannerMundo />
    </StylePaginaHome>
  )
}

export default PaginaHome