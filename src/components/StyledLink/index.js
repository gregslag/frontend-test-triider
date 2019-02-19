import React from "react";

import { A } from "./styles";

const StyledLink = ({ toUpper, primary, active, ...props }) => (
  <A toUpper={toUpper} primary={primary} active={active} {...props} />
);

export default StyledLink;
