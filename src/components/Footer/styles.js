import styled from "styled-components";
import { colors, flex, device } from "../../stylesheets";

export const StyledFooter = styled.footer`
  ${flex.row.vCenterBetween}
  padding: 1rem;
  background: ${colors.white};
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.25);
  height: 120px;

  @media ${device.tablet} {
    height: 50px;
  }
`;

export const FooterLeft = styled.div`
  width: 50%;
  height: 100%;
`;

export const FooterRight = styled.div`
  width: 50%;
  height: 100%;
  padding-left: 1rem;
  ${flex.column.hCenterAroud}

  @media ${device.tablet} {
    ${flex.row.vCenterAround}
    width: 70%;
    max-width: 450px;
    div {
      flex-grow: 1;
      width: auto !important;
    }
  }

  div {
    flex: 1;
    width: 100%;
    ${flex.row.vCenterStart}
  }
`;
