import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
// import { TransacoesContext } from '../../../core/contexto/useTransacoes'
// import Logo from '../../common/Logo/Logo'
import { StylesLayout } from './Layout.Styles'
import Footer from '../../views/LandingPage/Footer/Footer'

const Layout = ({ children }) => {

//   const { nome } = useContext(TransacoesContext)
  return (
    <StylesLayout>
      <aside className='barra-lateral'>
        {/* <Logo /> */}
        <ul>
          <li>
            <Link>EcoMart</Link>
          </li>
          <li>
            <Link>Produtos</Link>
          </li>
          <li>
            <Link>Contato</Link>
          </li>
        </ul>
      </aside>
      <div>

        <p>Olá, seja bem vindo</p>
        <section className='corpo-pagina'>
            <h1>Você possui 2392 pontos</h1>
            <p>Troque seus pontos por benefícios</p>
        </section>
        <Footer/>
      </div>
    </StylesLayout>
  )
}

export default Layout