import styled from "styled-components";

export const StyleHeader = styled.header`
height: 100%;
color: blue;
display: flex;
background-color: #f2f2f2;
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

.Link{
color: black;
font-size: 22px;
}

`;