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
    <div>
      <h2> Entre em contato </h2>

      <h2> Redes Sociais </h2>
      <ul>
        <li><FacebookLogo alt="Ícone do Facebook"  />
          <a href="https://www.facebook.com/pagina-da-ecomart"> Facebook </a>
        </li>

        <li><InstagramLogo alt="Ícone do Instagram"  />
          <a href="https://www.instagram.com/pagina-da-ecomart"> Instagram </a>
        </li>
      </ul>

      <h2> Envie-nos um email </h2>
      <p>
        {" "}
        Estamos abertos para receber suas opiniões. Basta preencher o formulário
        abaixo:{" "}
      </p>            
      
    </div>
    <Footer></Footer>
    </>
  );
};

export default Contato;
