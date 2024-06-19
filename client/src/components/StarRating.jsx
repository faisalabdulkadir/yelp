import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push({ font: faStar, color: "orange" });
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push({ font: faStarHalfStroke, color: "orange" });
    } else {
      stars.push({ font: faStarRegular, color: "orange" });
    }
  }
  return (
    <>
      {stars.map((star, index) => (
        <FontAwesomeIcon key={index} icon={star.font} color={star.color} />
      ))}
    </>
  );
};

export default StarRating;
