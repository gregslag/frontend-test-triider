import React from "react";
import Rating from "react-rating";
import { MdStar, MdStarBorder } from "react-icons/md";
import { colors } from "../../stylesheets";

const StarRating = ({ stars }) => (
  <Rating
    emptySymbol={<MdStar color={colors.yellow} size={20} />}
    fullSymbol={<MdStarBorder color={colors.yellow} size={20} />}
    initialRating={stars}
    readonly
  />
);

export default StarRating;
