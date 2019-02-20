import styled from "styled-components";
import { flex, colors, device } from "../../stylesheets";

export const Slider = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  padding-bottom: 1rem;
  max-width: 300px;
  margin: 0 auto;
  & > :not(:last-child) {
    margin-right: 1rem;
  }

  @media ${device.tablet} {
    max-width: 500px;
    overflow-x: hidden;
  }
  @media ${device.laptop} {
    margin: 0;
  }
`;

export const TitleBoxWrapper = styled.div`
  max-width: 50%;
  text-align: center;
  h3 {
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    font-weight: 1rem;
  }
`;

export const TitleWrapper = styled.div`
  @media ${device.laptop} {
    ${flex.row.vCenterBetween};
    width: 100%;
    padding: 2rem 2rem 1rem;

    & > * {
      padding: 0;
    }
  }
`;

export const Number = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  ${flex.row.CenterCenter}
  background: ${colors.grayLight};
  color: ${colors.white};
  font-size: 24px;
`;

export const QuotesWrapper = styled.div`
  ${flex.column.hCenterAroud}
`;

export const ImagesWrapper = styled.div`
  ${flex.row.vCenterAround}
  margin-bottom: .5rem;
  & > :not(:last-child) {
    margin-right: 0.5rem;
  }
`;
