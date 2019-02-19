import React from "react";

import { Container } from "./styles";

const Label = ({ size, background, children, ...props }) => (
  <Container size={size} background={background} {...props}>
    {children}
  </Container>
);

export default Label;
