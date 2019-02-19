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
    `,
    hCenterAround: css`
      display: flex;
      flex-direction: row;
      align-items: space-around;
      justify-content: center;
    `,
    CenterCenter: css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    `,
    vCenterStartWrap: css`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
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
    `,
    hStartCenter: css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    `
  }
};
