import styled from "styled-components";
import { colors } from "../../stylesheets";

export const A = styled.a`
  &:hover {
    color: ${colors.primary};
  }
  text-transform: ${props => (props.toUpper ? "uppercase" : "none")};
  color: ${props =>
    props.primary || props.active ? colors.primary : colors.grayDark};
  cursor: pointer;
`;
