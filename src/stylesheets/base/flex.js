import { css } from "styled-components";

export const flex = {
  row: {
    vCenterAround: css`
      display: flex;
      align-items: center;
      justify-content: space-around;
    `,
    vCenterBetween: css`
      display: flex;
      align-content: center;
      justify-content: space-between;
    `,
    vCenterEnd: css`
      display: flex;
      align-content: center;
      justify-content: flex-end;
    `,
    vCenterStart: css`
      display: flex;
      align-content: center;
      justify-content: flex-start;
    `
  }
};
