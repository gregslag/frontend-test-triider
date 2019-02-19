import { css } from "styled-components";

export const flex = {
  rowCenterAround: css`
    display: flex;
    align-items: center;
    justify-content: space-around;
  `,
  rowCenterBetween: css`
    display: flex;
    align-content: center;
    justify-content: space-between;
  `
};
