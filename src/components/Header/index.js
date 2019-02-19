import React from "react";
import { MdDehaze } from "react-icons/md";
import { NavBar, NavLeft, NavRight, Settings, MenuItems } from "./styles";
import RoundedImage from "../RoundedImage";
import StyledLink from "../StyledLink";

import imgHeader from "../../img/logo_header.svg";
import imgProfile from "../../img/profile.jpg";

const Header = () => (
  <header>
    <NavBar>
      <NavLeft>
        <span className="burguer">
          <MdDehaze size={28} />
        </span>
        <a className="logo-header" href="https://www.triider.com.br/">
          <img src={imgHeader} alt="Triider" />
        </a>
      </NavLeft>
      <NavRight>
        <MenuItems>
          <div>
            <StyledLink active>Início</StyledLink>
          </div>
          <div>
            <StyledLink>Catálogo de serviços</StyledLink>
          </div>
          <div>
            <StyledLink>Meus Orçamentos</StyledLink>
          </div>
          <div>
            <StyledLink>Mensagens (N)</StyledLink>
          </div>
          <div>
            <StyledLink>Ajuda</StyledLink>
          </div>
        </MenuItems>

        <Settings>
          <RoundedImage size="small" src={imgProfile} alt="Foto de Perfil" />
          <span>Gregory</span>
          <span className="arrow-down" />
        </Settings>
      </NavRight>
    </NavBar>
  </header>
);

export default Header;
