import styled from "styled-components";
const Button = ({ texto, variant, width, onClick }) => {
  return (
    <>
      {variant == 'primary' && <PrimaryButton onClick={onClick} width={width}>{texto}</PrimaryButton>}
      {variant == 'secondary' && <SecondaryButton onClick={onClick} width={width}>{texto}</SecondaryButton>}
    </>
  );
};

const StyleButton = styled.button`
  width:auto;
  border-radius: 8px;
  box-shadow: 5px 6px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 12px 48px;
  align-items: center;
  font-weight: 650;
  line-height: normal;
  

  &:hover{
    background-color: ${(props) => props.theme.white20};
  }
`;
export default Button;
