import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from "../../../common/Button/Button"
import * as S from "../Header/header.style"

const Header = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/login')
    }
return (
    <S.StyleHeader className="content">
    <picture className='logo'>
        <img src={Logo} alt="" />
    </picture>
    <div>
        <h1>EcoMart</h1>
        <nav>
        <ul>
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
    </div>
    </S.StyleHeader>
)
}

export default Header