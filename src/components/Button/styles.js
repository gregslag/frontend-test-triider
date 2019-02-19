import styled from "styled-components";
import { colors } from "../../stylesheets";

//Outros tamanhos podem ser declarados aqui
const sizes = {
  larger: ".5rem 2.5rem"
};

export const Container = styled.button`
  background: ${props => colors[props.background]};
  color: ${colors.white};
  border: 1px solid ${props => colors[props.background]};
  padding: ${props => sizes[props.size]};
  cursor: pointer;
`;
