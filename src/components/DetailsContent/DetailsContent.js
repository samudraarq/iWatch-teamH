import React from "react";
import { Route } from "react-router-dom";
import DetailsChar from "./DetailsChar/DetailsChar";
import styles from "./DetailsContent.module.css";
import DetailsNav from "./DetailsNav/DetailsNav";
import DetailsOverview from "./DetailsOverview/DetailsOverview";

const DetailsContent = ({ movId }) => {
  return (
    <div className={styles.container}>
      <DetailsNav movId={movId} />
      <Route path="/movie/details/:id/overview">
        <DetailsOverview />
      </Route>
      <Route path="/movie/details/:id/characters">
        <DetailsChar />
      </Route>
    </div>
  );
};

export default DetailsContent;
