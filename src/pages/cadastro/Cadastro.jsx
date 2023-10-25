import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { StyleCadastro } from "./cadastro.style";
import Textfield from "../../components/common/Textfield/Textfield";
import Button from "../../components/common/Button/Button";
import Header from "../../components/views/LandingPage/Header/Header";
import Footer from "../../components/views/LandingPage/Footer/Footer";

const Cadastro = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };
  return (
    <>
      <Header></Header>
      <StyleCadastro>
        <form className="formCadastro">
          <h2>Cadastro</h2>
          <div className="formulario">
            <div>
              <Textfield
                label="Nome*"
                name="nome"
                placeholder="Ex: João"
                type="text"
                required
                // value={nome}
                onChange={(e) => setNome(e)}
              />

              <Textfield
                label="Sobre nome*"
                name="sobreNome"
                placeholder="Ex: Silva"
                type="text"
                required
                // value={sobrenome}
                onChange={(e) => setSobrenome(e)}
              />

              <Textfield
                label="CPF*"
                name="cpf"
                placeholder="Ex: 123.456.789-00"
                type="number"
                required
                // value={cpf}
                onChange={(e) => setCPF(e)}
              />

              <Textfield
                label="Email*"
                name="email"
                placeholder="Ex: Joao.silva@email.com"
                type="email"
                required
                // value={email}
                onChange={(e) => setEmail(e)}
              />
              
              <Textfield
                label="Telefone*"
                name="telefone"
                placeholder="Ex: 43 99988-8252"
                type="telefone"
                required
                // value={telefone}
                onChange={(e) => setTelefone(e)}
              />
            </div>
            <div>

              <Textfield
                label="CEP*"
                name="cep"
                placeholder="Ex: 89.444.555"
                type="number"
                required
                // value={cep}
                onChange={(e) => setCEP(e)}
              />

              <Textfield
                label="Rua*"
                name="rua"
                placeholder="Ex: Av. Paraná"
                type="text"
                required
                // value={rua}
                onChange={(e) => setRua(e)}
              />

              <Textfield
                label="Numero*"
                name="numero"
                placeholder="Ex: 1111"
                type="number"
                required
                // value={numero}
                onChange={(e) => setNumero(e)}
              />

              <Textfield
                label="Senha*"
                name="senha"
                placeholder="Ex: ******"
                type="password"
                required
                // value={senha}
                onChange={(e) => setSenha(e)}
              />

              <Textfield
                label="Confirma Senha*"
                name="confirmaSenha"
                placeholder="Ex: ******"
                type="password"
                required
                // value={confirmasenha}
                onChange={(e) => setConfirmaSenha(e)}
              />
            </div>
          </div>

          <div className="fimForm">
            <p>
              Já tem conta tem conta?
              <Link to="/login" className="destaque" onClick={handleClick}>
                Faça login
              </Link>
            </p>
          </div>

<div>
      <Button
        width="100%"
        variant='primary'
        texto="Cadastrar"
        onClick={handleCadastro}
      />
  </div>

          <div className="fimForm">
            <Button
              width="100%"
              variant="secondary"
              texto="Cadastrar"
              // onClick={handleCadastro}
            />
          </div>
        </form>
      </StyleCadastro>
      <Footer></Footer>*/
      </>
  );
};

export default Cadastro;
