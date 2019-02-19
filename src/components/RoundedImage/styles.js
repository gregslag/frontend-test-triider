import styled, { css } from "styled-components";

const sizes = {
  small: css`
    width: 30px;
    height: 30px;
  `,
  medium: css`
    width: 60px;
    height: 60px;
  `
};

export const Img = styled.img`
  ${props => sizes[props.size]}
  border-radius: 50%;
`;
