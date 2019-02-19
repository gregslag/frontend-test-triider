import styled from "styled-components";
import { colors, flex, device } from "../../stylesheets";

export const NavBar = styled.div`
  ${flex.row.vCenterBetween}
  padding: 0 0.5rem;
  background: ${colors.white};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  height: 50px;
`;

export const NavLeft = styled.div`
  ${flex.row.vCenterAround}
  width: 100px;
  .logo-header {
    img {
      width: 60px;
      height: 20px;
    }
  }

  @media ${device.laptop} {
    .burguer {
      display: none;
    }
  }
`;

export const NavRight = styled.div`
  ${flex.row.vCenterEnd}
  
  @media ${device.laptop} {
    width: 75%;
  }
`;

export const Settings = styled.div`
  ${flex.row.vCenterAround}
  width: 120px;

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
    border-left: 1px solid rgba(0, 0, 0, 0.25);
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
