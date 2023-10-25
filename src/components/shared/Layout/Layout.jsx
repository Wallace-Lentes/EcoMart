import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
// import { TransacoesContext } from '../../../core/contexto/useTransacoes'
// import Logo from '../../common/Logo/Logo'
import { StylesLayout } from './Layout.Styles'

const Layout = ({ children }) => {

//   const { nome } = useContext(TransacoesContext)
  return (
    <StylesLayout>
      <aside className='barra-lateral'>
        {/* <Logo /> */}
        <ul>
          <li>
            <Link>Dashboard</Link>
          </li>
          <li>
            <Link>Entradas</Link>
          </li>
          <li>
            <Link>Saidas</Link>
          </li>
        </ul>
      </aside>
      <div>
        <header className='header-layout'>
          <p>Olá!</p>
          <Link >Sair</Link>
        </header>
        <main>
          {children}
        </main>
      </div>
    </StylesLayout>
  )
}

export default Layout