import styled, { css } from "styled-components";
import { colors } from "../../stylesheets";

const flexCenterAround = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 0.5rem;
  background: ${colors.white};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  height: 50px;
`;

export const Burguer = styled.div`
  ${flexCenterAround}
  width: 100px;
  a {
    img {
      width: 60px;
      height: 20px;
    }
  }
`;

export const Settings = styled.div`
  ${flexCenterAround}
  width: 120px;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  .arrow-down {
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid ${colors.grayDark};
  }
`;
