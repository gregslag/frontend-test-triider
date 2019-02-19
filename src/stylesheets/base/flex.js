import { css } from "styled-components";

export const flex = {
  row: {
    vCenterAround: css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    `,
    vCenterBetween: css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    `,
    vCenterEnd: css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
    `,
    vCenterStart: css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
    `
  },
  column: {
    hStartAroud: css`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
    `,
    hCenterAroud: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    `
  }
};
