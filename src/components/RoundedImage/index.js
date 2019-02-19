import React from "react";

import { Img } from "./styles";

const RoundedImage = ({ size = "small", ...props }) => (
  <Img size={size} {...props} />
);

export default RoundedImage;
