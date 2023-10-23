import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from "../../../common/Button/Button"
import {StyleHeader} from "../Header/header.style"
import logo from "/logo.png"


const Header = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/cadastro')
    }
return (
    <StyleHeader>
        <img className='logo'src={logo} alt="Logo da Empresa EcoMart com uma folha verde em cima da letra 'o'" aria-label='Logomarca'/>
        <nav >
        <ul className='ListaLinks'>
            <li>
                <Link className={'Link'}>Pagina Inicial </Link>
            </li>
            <li>
                <Link className={'Link'}>Quem Somos</Link>
            </li>
            <li>
                <Link className={'Link'}>Contato</Link>
            </li>
            <li>
                <Link className={'Link'}>Produtos </Link>
            </li>
            <li>
                <Link to='/login' className={'Link'}>Entrar</Link>
            </li>
            <li>
            <Button texto='Criar Conta' variant='primary' onClick={handleClick} />
            </li>
        </ul>
        </nav>
    </StyleHeader>
)
}

export default Header