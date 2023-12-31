import styled from "styled-components";

export const StyleFooter = styled.footer`
background-color: #63bb63;
height: 20vh;
display: flex;
/* margin-top: 50px; */ 

.rodape {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
}
.loc-icon {
    display: flex;
    align-items: center;
}
.nomerua {
    font-family: 'Bree Serif', serif;
    font-size: 18px;
}
.map {
    margin-right: 4px;
}
.contato {
    display: flex;
    flex-direction: column;
    gap: 0;
}
.contato h3,
.contato p {
    margin: auto;
    font-size: 16px;
    font-family: 'Bree Serif', serif;
}

.icones svg {
    cursor: pointer;
    margin-right: 10px;
    color: #013B0E;
}
.icones svg:hover {
    transform: scale(1.2);
    transition: 0.3s;
    opacity: 0.5;
}
`;