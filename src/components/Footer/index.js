import React from "react";
import LogoImage from "../LogoImage";
import StyledLink from "../StyledLink";
import { StyledFooter, FooterLeft, FooterRight } from "./styles";

const Footer = () => (
  <StyledFooter>
    <FooterLeft>
      <LogoImage />
    </FooterLeft>
    <FooterRight>
      <div>
        <StyledLink>Central de Ajuda</StyledLink>
      </div>
      <div>
        <StyledLink>Termos de uso</StyledLink>
      </div>
      <div>
        <StyledLink>Código de conduta</StyledLink>
      </div>
    </FooterRight>
  </StyledFooter>
);

export default Footer;
