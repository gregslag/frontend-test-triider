import React from "react";
import Label from "../Label";
import { Container, Avatar, Content, LabelContainer } from "./styles";

const Card = ({ opacity, larger, children }) => (
  <Container opacity={opacity} larger={larger}>
    {children}
  </Container>
);

const CardAvatar = ({ children }) => <Avatar>{children}</Avatar>;
const CardContent = ({ children }) => <Content>{children}</Content>;
const CardLabel = ({ children, ...props }) => (
  <LabelContainer>
    <Label {...props}>{children}</Label>
  </LabelContainer>
);

export default Card;
export { CardAvatar, CardContent, CardLabel };
