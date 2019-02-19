import React from "react";

import { Container, List } from "./styles";

const List = ({ children }) => (
  <Container>
    <List>{children}</List>
  </Container>
);

export default List;
