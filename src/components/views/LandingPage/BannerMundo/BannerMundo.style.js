import styled from 'styled-components'

export const StyleContainer = styled.section`
display: flex;
align-items: center;
justify-content: space-around;

.textos {
    width: 50%;
    max-width: 550px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
}

.planeta {
    width: 500px;
    >img{width: 100%};
}
`