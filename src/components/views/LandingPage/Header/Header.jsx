import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom';

const Header = () => {
return (

    <div>
        <h1>EcoMart</h1>
        <nav>
        <ul>
            <li>
                <Link to='/'>Pagina Inicial</Link> 
            </li>
            <li>
                <Link to='/QuemSomos'>Quem Somos</Link>
            </li>
            <li>
                <Link to='/Contato'>Contato</Link>
            </li>
            <li>
                <Link to='/Produtos'>Produtos</Link> 
            </li>
        </ul>
        </nav>
        
    </div>
)
}

export default Header