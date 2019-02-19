import React from "react";

import { Container, Avatar, Content } from "./styles";

const Card = ({ children }) => <Container>{children}</Container>;

const CardAvatar = ({ children }) => <Avatar>{children}</Avatar>;
const CardContent = ({ children }) => <Content>{children}</Content>;

export default Card;
export { CardAvatar, CardContent };
