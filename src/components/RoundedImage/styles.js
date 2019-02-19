import styled, { css } from "styled-components";

const sizes = {
  small: css`
    width: 30px;
    height: 30px;
  `,
  medium: css`
    width: 50px;
    height: 50px;
  `
};

export const Img = styled.img`
  ${props => sizes[props.size]}
  border-radius: 50%;
`;
