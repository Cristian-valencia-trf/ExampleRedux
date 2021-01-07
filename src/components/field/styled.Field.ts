import styled from "styled-components";
interface IStyledField {
  border?: string;
  margin?: string;
  padding?: string;
}

const StyledField = styled.input<IStyledField>`
  border: ${(pr) => pr.border};
  margin: ${(pr) => pr.margin}px;
  padding: ${(pr) => pr.padding}px;
`;

export default StyledField;
