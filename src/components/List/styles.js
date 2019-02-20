import styled from "styled-components";
import { flex, device, colors } from "../../stylesheets";

export const Container = styled.div`
  ${flex.row.CenterCenter}
`;

export const ListBody = styled.div`
  ${flex.column.hCenterAroud}
  padding: 1rem 0;
  max-width: 95%;

  & > :not(:last-child) {
    margin-bottom: 1rem;
  }

  @media ${device.tablet} {
    ${flex.row.vCenterStartWrap};
    background: ${colors.white};

    & > * {
      margin-bottom: 1rem !important;
    }

    & > :not(:last-child) {
      margin-right: 1rem;
    }
  }
`;
