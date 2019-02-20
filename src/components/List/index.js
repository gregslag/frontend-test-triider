import React from "react";

import { Container, ListBody } from "./styles";

const List = ({ children }) => (
  <Container>
    <ListBody>{children}</ListBody>
  </Container>
);

export default List;
