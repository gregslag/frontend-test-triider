import styled from "styled-components";
import { colors, flex } from "../../stylesheets";

export const Container = styled.div`
  max-width: 300px;
  max-height: 200px;
  background: ${colors.white};
  border: 1px solid ${colors.grayLight};
  padding: 0.5rem;

  display: flex;
`;

export const Avatar = styled.div`
  flex-grow: 1;
`;

export const Content = styled.div`
  flex-grow: 2;
  ${flex.column.hStartCenter};
  padding-left: 0.5rem;

  & > * {
    padding: 0 0.2rem;
    ${flex.row.vCenterStart};
  }
`;
