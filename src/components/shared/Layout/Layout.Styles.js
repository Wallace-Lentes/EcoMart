import styled from "styled-components";

export const StylesLayout = styled.body`
  width: 100%;
  height: 100vh;
  display: flex;

  > .barra-lateral {
    width: 264px;
    height: 100%;
    padding: 24px 10px;
    background-color: #95d195;
    display: flex;
    text-align: center;
    flex-direction: column;
    gap: 24px;

    > ul {
      display: flex;
      gap: 34px;
      flex-direction: column;
      padding-top: 15%;

      > li {
        color: #0a6b10;

        > h3 {
          text-align: center;
        }
      }
    }
  }

  .logo {
    width: 190px;
    object-fit: contain;
  }
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #f5f6ee;
  }
  .titulo {
    color: #0a6b10;
    font-size: 40px;
    text-align: center;
    margin: 2%;
  }
  h1 {
    font-family: "Bree Serif", serif;
    color: #0a6b10;
    text-align: center;
    font-size: 33px;
    padding-bottom: 3%;
  }

  h2 {
    color: #0a6b10;
    font-size: 28px;
    text-align: justify;
    padding-left: 5%;
  }
  .conversor {
    padding-left: 2%;
  }
  p {
    color: #0a6b10;
    font-size: 23px;
    text-align: justify;
    padding-left: 5%;
  }
  .coleta {
    display: flex;
    flex-direction: row;
  }
  .sp,
  .rj,
  .sc,
  .rs {
    display: flex;
    padding-left: 6%;
    padding-top: 7%;
  }
`;
