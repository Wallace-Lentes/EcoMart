import React from 'react'
import { StyleFooter } from "../Footer/footer.style";
import {
  MapPin,
  LinkedinLogo,
  InstagramLogo,
  FacebookLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <StyleFooter>
      <div className="rodape">
        <section className="loc-icon">
          <MapPin
            className="map"
            color={'#013B0E'}
            size={20}
            weight="fill"
          />
          <p className="nomerua">
            Rua Anne Frank, 1422, Boqueirão - Curitiba-PR
          </p>
        </section>

        <section className="icones">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinLogo color={'#013B0E'} size={40} weight="fill" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramLogo color={'#013B0E'} size={40} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookLogo color={'#013B0E'} size={40} />
          </a>
        </section>
        <section className="contato">
          <h3>Fale conosco</h3>
          <p>0800 510 2023</p>
          <p>ecomart@ecomart.com</p>
        </section>
      </div>
    </StyleFooter>
  );
};

export default Footer