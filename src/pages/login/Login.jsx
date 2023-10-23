import React, { useState }  from 'react'
import { Link, useNavigate } from "react-router-dom";
import { StyleLogin } from "../login/login.style";
import Button from "../../components/common/Button/Button";
import Textfield from "../../components/common/Textfield/Textfield";
import login from "../../../src/assets/login.svg"

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState();

  async function handleLogin(e) {
    e.preventDefault();
    const resposta = await loginUsuario(email, senha);

    if (resposta.success) {
      navigate("/home");
      localStorage.setItem("id", resposta.data.id);
      localStorage.setItem("nome", resposta.data.nome);
    } else {
      setError(resposta.message);
    }
    console.log(resposta);
  }

  return (
    <>
      <StyleLogin>
        <section>
          <div className="div-principal">
            <h1>Login</h1>
            <form>
              <Textfield
                label="Email:"
                name="email"
                type="email"
                placeholder="email@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e)}
              />

              <Textfield
                label="Senha:"
                name="senha"
                placeholder="●●●●●●●"
                type="password"
                required
                value={senha}
                onChange={(e) => setSenha(e)}
              />
              {error && <p style={{ color: "red" }}>{error}</p>}
              <Button
                texto="Entrar"
                variant="primary"
                width="10"
                onClick={handleLogin}
              />
              <Link to="/cadastro" className="link-cadastro">
                Não possui cadastro?
              </Link>
            </form>
            <picture>
          <img
            src={login}
            alt="Imagem de um usuario remetendo a idéia de login"
          />
          </picture>
          </div>
        </section>
      </StyleLogin>
    </>
  );
};

export default Login