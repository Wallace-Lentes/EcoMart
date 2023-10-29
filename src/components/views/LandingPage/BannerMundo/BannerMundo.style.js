import styled from 'styled-components'

export const StyleContainer = styled.section`
display: flex;
align-items: center;
justify-content: space-around;
background-color:#F5F6EE;

.textos {
    font-family: 'Bree Serif', serif;
    width: 50%;
    max-width: 550px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    color: #0a6b10;
}

.planeta {
    width: 500px;
    >img{width: 100%};
}
`