import React from "react";
import styles from "./DetailsReview.module.css";
import InputReview from "./InputReview/InputReview";
import MovieReview from "./MovieReview/MovieReview";

const DetailsReview = () => {
  return (
    <div>
      <InputReview />
      <MovieReview />
    </div>
  );
};

export default DetailsReview;
