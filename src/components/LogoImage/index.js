import React from "react";
import img from "../../img/logo_header.svg";

import { Img } from "./styles";

const LogoImage = () => (
  <a href="https://www.triider.com.br/">
    <Img src={img} alt="Triider" />
  </a>
);

export default LogoImage;
