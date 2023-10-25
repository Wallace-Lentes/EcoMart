import React from "react";
import Header from "../../components/views/LandingPage/Header/Header";
import Footer from "../../components/views/LandingPage/Footer/Footer";
// import Input from "../../components/common/Input";
// import Textfield from "../../components/common/Textfield";
// import Button from "../../components/common/Button";
import { FacebookLogo, InstagramLogo } from "@phosphor-icons/react";


const Contato = () => {
    return (

      <>
      <Header></Header>
        <main>
            <section>
                <div>
        <h2> Entre em contato </h2>

        <h2> Redes Sociais </h2>
        <ul>
        <li>
        <a href="https://www.facebook.com/pagina-da-ecomart"> Facebook </a> //Falta inserir os ícones do Facebook e Instagram
        </li>

        <li>
        <a href="https://www.instagram.com/pagina-da-ecomart"> Instagram </a>
        </li>
        </ul>

        <h2> Envie-nos um email </h2>
        <p> Estamos abertos para receber suas opiniões. Basta preencher o formulário abaixo: </p>

        <form action=''> 
                <input type="text" name="nome" placeholder="Seu nome" required/>
                <input type="email" name="email" placeholder="Seu email" required/>
                <input type="tel" name="celular" placeholder="Seu celular" required/>
                <textarea name="mensagem" placeholder="Sua mensagem" required></textarea>
                <input type="submit" value="Enviar"/>
        </form> 
        </div>       

    </section>
</main>
<Footer></Footer>
    </>
)}

export default Contato;
