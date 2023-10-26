import React from "react";
import Header from "../../components/views/LandingPage/Header/Header";
import Footer from "../../components/views/LandingPage/Footer/Footer";
// import Input from "../../components/common/Input";
// import Textfield from "../../components/common/Textfield";
import { Envelope, FacebookLogo, InstagramLogo, PhoneCall } from "@phosphor-icons/react";
import { StyleContato } from "./Contato.style";
import Button from "../../components/common/Button/Button";


const Contato = () => {
    return (
<>
<Header />
<StyleContato> 
        <h2> Entre em contato </h2>
        <p className="Textoopiniao">
        Aqui na Ecomart, valorizamos a sua opinião e estamos aqui para atendê-lo da melhor maneira possível. Se você tiver alguma dúvida sobre como descartamos o lixo reciclavel ou como remanejamos para nossos artesões, sugestões para melhorias ou qualquer reclamação, entre em contato. A sua opinião é fundamental para o nosso aprimoramento e crescimento. Fique à vontade para entrar em contato conosco através dos nossos canais de atendimento disponíveis, seja por telefone, e-mail ou redes sociais. Estamos comprometidos em fornecer a melhor experiência possível e aguardamos o seu feedback.
        </p>

        <h3> Entre em contato pelas nossas Redes Sociais: </h3>
        <ul className="contatos">
            <section className="phone1">
            <PhoneCall 
            className="phone"
            color={'#013B0E'}
            size={32}
            weight="fill"
            />
            <p>0800 510 2023</p>
            </section>
            <section className="envelope1">
            <Envelope
            className="envelope"
            color={'#013B0E'}
            size={32}
            weight="fill"
            />
            <p>ecomart@ecomart.com</p>
            </section>
            <section className="face">
            <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FacebookLogo color={'#013B0E'} size={32} />
        </a>
        </section>
        <section className="insta">
            <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
        >
            <InstagramLogo color={'#013B0E'} size={32} />
        </a>
        </section>
        </ul>
        <p> Estamos abertos para receber suas opiniões. Basta preencher o formulário abaixo: </p>
        <section className="formulario">
        <form action=''> 
                <input type="text" name="nome" placeholder="Seu nome" required/>
                <input type="email" name="email" placeholder="Seu email" required/>
                <input type="tel" name="celular" placeholder="Seu celular" required/>
                <textarea className="caixatexto"  name="mensagem" placeholder="Sua mensagem" required></textarea>
                <Button
              width="100%"
              variant="secondary"
              texto="Enviar"
            //   onClick={handleCadastro}
            />
        </form> 
    </section>
</StyleContato>
< Footer />
</>
)
}

export default Contato;
