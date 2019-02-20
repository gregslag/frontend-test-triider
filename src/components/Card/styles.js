import styled, { css } from "styled-components";
import { colors, flex } from "../../stylesheets";

const larger = css`
  width: 300px;
  height: 200px;

  & > :last-child {
    font-size: 1.2rem;
  }
`;

const opacity = css`
  opacity: 0.5;
`;

export const Container = styled.div`
  ${props => props.larger && larger};
  ${props => props.opacity && opacity};
  min-width: 220px;
  min-height: 80px;
  max-width: 300px;
  max-height: 200px;
  background: ${colors.white};
  border: 1px solid ${colors.grayLight};
  padding: 0.5rem;

  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: center;
`;

export const Avatar = styled.div`
  width: 20%;
`;

export const Content = styled.div`
  width: 80%;
  ${flex.column.hStartCenter};
  padding-left: 0.5rem;

  & > * {
    padding: 0 0.2rem;
    ${flex.row.vCenterStart};
  }
`;

export const LabelContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 0.5rem;
  height: min-content;
`;
