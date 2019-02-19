import React from "react";

import { Container, List } from "./styles";

const BoxList = ({ children }) => (
  <Container>
    <List>{children}</List>
  </Container>
);

export default BoxList;
