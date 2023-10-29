import styled from "styled-components";

export const StyleLogin = styled.main` 
background-color: #F5F6EE;

    section, .div-principal, form {
        display: flex;
    }

    h1 {
        font-family: 'Bree Serif', serif;
        font-weight: 500;
        text-decoration: none;
        font-size: 1.7rem;
        color:#0a6b10;
    }

    .div-principal, form {
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    section {
        justify-content: center;
        padding: 50px;
    }

    .div-principal {
        border-radius: 12px;
        background-color: #95d195;
        width: 60%;
        padding: 50px;
        margin: 5% 0 10% 0%;
        
    }
    label{
        font-weight: 500;
    }

    .div-principal button {
        color: #5c2b71;
    }

    .div-principal button:hover {
        background-color: #5c2b71;
        color:#fabd2b;
        transition: .2s;
    }

    .link-cadastro {
        font-size: 15px;
        font-family: 'Bree Serif', serif;
        color: #263238;
    }
img{
    width: 500px;
    height: 500px;
}

`