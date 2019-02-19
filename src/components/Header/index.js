import React from "react";
import { MdDehaze } from "react-icons/md";
import { NavBar, Burguer, Settings } from "./styles";
import imgHeader from "../../img/logo_header.svg";
import imgProfile from "../../img/profile.jpg";

const Header = () => (
  <header>
    <NavBar>
      <Burguer>
        <span>
          <MdDehaze size={28} />
        </span>
        <a href="https://www.triider.com.br/">
          <img src={imgHeader} alt="Triider" />
        </a>
      </Burguer>

      <Settings>
        <img src={imgProfile} alt="Foto de Perfil" />
        <span>Gregory</span>
        <span className="arrow-down" />
      </Settings>
    </NavBar>
  </header>
);

export default Header;
