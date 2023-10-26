import { Link } from 'react-router-dom'
// import { TransacoesContext } from '../../../core/contexto/useTransacoes'
// import Logo from '../../common/Logo/Logo'
import {Recycle} from "@phosphor-icons/react";
import { StylesLayout } from '../Layout/Layout.Styles'
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
            <Link to='/Contato'>Contato</Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1 className='titulo'>Olá, seja bem vindo</h1>
            <h2>Atualmente você não possui pontos</h2>
            <p>Faça sua primeira troca, acumule pontos e troque por beneficios</p>
        <div className='coleta'>
        <section className="sp">
            <a
            href="https://www.reciclasampa.com.br/pontos-de-coleta"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Recycle color={'#013B0E'} size={32} />
        </a>
        <p> Ponto de coleta SP.</p>
        </section>
        <section className="rj">
            <a
            href="https://www.recicloteca.org.br/coleta-seletiva/coleta-seletiva-carioca/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Recycle color={'#013B0E'} size={32} />
        </a>
        <p> Ponto de coleta RJ.</p>
        </section>
        <section className="sc">
            <a
            href="https://www.pmf.sc.gov.br/sistemas/comcap/ecopontos.php"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Recycle color={'#013B0E'} size={32} />
        </a>
        <p> Ponto de coleta SC.</p>
        </section>
        <section className="rs">
            <a
            href="https://prefeitura.poa.br/carta-de-servicos/coleta-seletiva-de-residuos"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Recycle color={'#013B0E'} size={32} />
        </a>
        <p> Ponto de coleta RS.</p>
        </section>
        </div>
      </div>
    </StylesLayout>
  )
}

export default Layout