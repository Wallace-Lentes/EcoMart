import styled from 'styled-components'

export const StylesLayout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  > .barra-lateral {
    width: 264px;
    height: 100%;
    padding: 24px 10px;
    background-color: #013B0E;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 24px;

    > ul {
      display: flex;
      gap: 34px;
      flex-direction: column;

      > li {
        color: #F5F6EE;
      }
    }
  }
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #F5F6EE;
  }
.titulo {
      color: #0a6b10;
      font-size: 40px;
      text-align: center;
      margin: 2%;
  }
  h1 {
    color: #0a6b10;
    text-align: center;
    font-size: 30px;
  }

h2 {
    color: #0a6b10;
    text-align: center;
    font-size: 25px;
    text-align: justify;
} 
p {
  color: #0a6b10;
  font-size: 20px;
  text-align: justify;
  
}
.coleta {
  display: flex;
  flex-direction: row;
}
.sp, .rj, .sc, .rs {
  display: flex;
  padding-left: 7%;
  padding-top:42%;
}
`