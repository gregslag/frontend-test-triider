import styled from "styled-components";
import { colors, flex } from "../../stylesheets";

export const Container = styled.div`
  ${flex.column.hCenterAroud}
  width: 300px;
  height: 300px;
  max-height: 300px;
  background: ${colors.white};
  border: 1px solid ${colors.blackBis};
  padding: 0.5rem;
`;
