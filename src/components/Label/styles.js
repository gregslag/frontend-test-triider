import styled from "styled-components";
import { colors } from "../../stylesheets";

//Outros tamanhos podem ser declarados aqui
const sizes = {
  small: ".2rem .4rem",
  larger: ".5rem 2.5rem"
};

export const Container = styled.span`
  background: ${props => colors[props.background]};
  color: ${colors.white};
  border: 1px solid ${props => colors[props.background]};
  padding: ${props => sizes[props.size]};
  font-size: 0.8rem;
`;
