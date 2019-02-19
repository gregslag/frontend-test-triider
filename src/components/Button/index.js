import React from "react";

import { Container } from "./styles";

const Button = ({ size, background = "primary", children, ...props }) => (
  <Container size={size} background={background} {...props}>
    {children}
  </Container>
);

export default Button;
