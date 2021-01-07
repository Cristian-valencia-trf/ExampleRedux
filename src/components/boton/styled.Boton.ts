import styled from "styled-components";

interface IStyledButton {
  color?: string;
  width?: string;
  fontSize?: string;
  backgroundColor?: string;
}

const StyledButton = styled.button<IStyledButton>`
  color: ${(pr) => (pr.color ? pr.color : "black")};
  width: ${(pr) => (pr.width ? pr.width : "150")}px;
  font-size: ${(pr) => (pr.fontSize ? pr.fontSize : "20")}px;
  background-color: ${(pr) =>
    pr.backgroundColor ? pr.backgroundColor : "white"};
`;

export default StyledButton;
