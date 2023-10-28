import styled from "styled-components";

export const ConversorStyle = styled.div`
    max-width: 400px;
    height: 400px;
    padding: 40px;
    background: blue;
    gap: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    select {
        width: 200px;
        height: 24px;
    }

    .material,
    .valor {
        display: flex;
        flex-direction: column;
    }

    .material {
        select {
            width: 320px;
            height: 40px;
        }
    }

    .valor {
        input {
            height: 40px;
        }
    }

    .material-pontos {
        input {
            width: 320px;
            height: 40px;
        }
    }
`