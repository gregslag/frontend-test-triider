import styled from "styled-components";
import { colors, flex, device } from "../../stylesheets";

export const NavBar = styled.header`
  ${flex.row.vCenterBetween}
  padding: 0 0.5rem;
  background: ${colors.white};
  box-shadow: 0 4px 4px ${colors.blackBis};
  height: 50px;
  position: fixed;
  width: 100%;
  z-index: 1;
`;

export const NavLeft = styled.div`
  ${flex.row.vCenterAround}
  width: 100px;

  @media ${device.laptop} {
    .burguer {
      display: none;
    }
  }
`;

export const NavRight = styled.div`
height: 100%;
  ${flex.row.vCenterEnd}
  
  @media ${device.laptop} {
    width: 75%;
  }
`;

export const Settings = styled.div`
  ${flex.row.vCenterAround}
  width: 120px;
  height: 100%;

  .arrow-down {
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid ${colors.grayDark};
  }

  @media ${device.laptop} {
    width: 160px;
    padding: 0 1rem;
    border-left: 1px solid ${colors.blackBis};
  }
`;

export const MenuItems = styled.div`
  display: none;

  @media ${device.laptop} {
    ${flex.row.vCenterAround}
    width: 70%;
    max-width: 600px;
    div {
      flex-grow: 1;
    }
  }
`;
