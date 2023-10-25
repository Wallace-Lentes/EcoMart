import styled from 'styled-components'

export const StylesLayout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  > .barra-lateral {
    width: 264px;
    height: 100%;
    padding: 24px 10px;
    background-color: #067BC2;
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
  }
  .header-layout {
    border: solid red;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #F5F6EE ;
    padding: 24px;
    /* color: #95d195 ; */

    > p {
      color: #067BC2;
    }
  }
.corpo-pagina {
    border: solid yellow;
    height: 100%;
    background-color: #F5F6EE;    
}
`