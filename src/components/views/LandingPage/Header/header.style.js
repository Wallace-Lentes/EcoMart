import styled from "styled-components";

export const StyleHeader = styled.header`
height: fit-content;
color: blue;
display: flex;
background-color: #95d195;
padding: 12px;



.logo {
    width: 150px;
    object-fit: contain;
}

>nav{
    width: 100%;
    height: fit-content;
}
.ListaLinks {
display: flex;
justify-content: space-around;
align-items: center;

}

.Link {
    font-family: 'Bree Serif', serif;
color: black;
font-size: 22px;
}

`;