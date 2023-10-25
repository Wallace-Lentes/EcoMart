import { Link } from 'react-router-dom'
// import { TransacoesContext } from '../../../core/contexto/useTransacoes'
// import Logo from '../../common/Logo/Logo'
import { StylesLayout } from './Layout.Styles'
//   const { nome } = useContext(TransacoesContext)

const Layout = () => {
  return (
    <StylesLayout>
      <img src="" alt="" />
      <nav className='barra-lateral'>
        <ul>
          <li>
            <h2>EcoMart</h2>
          </li>
          <li>
            <Link to='/Produtos'>Produtos</Link>
          </li>
          <li>
            <Link>Contato</Link>
          </li>
        </ul>
      </nav>
      <div>
        <p>Olá, seja bem vindo</p>
        <section className='corpo-pagina'>
            <h1>Você possui 2392 pontos</h1>
            <p>Troque seus pontos por benefícios</p>
        </section>

      </div>
    </StylesLayout>
  )
}

export default Layout