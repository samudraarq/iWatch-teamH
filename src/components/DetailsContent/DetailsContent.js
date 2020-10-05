import React from "react";
import { Route } from "react-router-dom";
import DetailsChar from "./DetailsChar/DetailsChar";
import styles from "./DetailsContent.module.css";
import DetailsNav from "./DetailsNav/DetailsNav";
import DetailsOverview from "./DetailsOverview/DetailsOverview";
import DetailsReview from "./DetailsReview/DetailsReview";

const DetailsContent = ({ movId, movie }) => {
  return (
    <div className={styles.container}>
      <DetailsNav movId={movId} />
      <Route path="/movie/details/:id/overview">
        <DetailsOverview movie={movie} />
      </Route>
      <Route path="/movie/details/:id/characters">
        <DetailsChar />
      </Route>
      <Route path="/movie/details/:id/reviews">
        <DetailsReview />
      </Route>
    </div>
  );
};

export default DetailsContent;
