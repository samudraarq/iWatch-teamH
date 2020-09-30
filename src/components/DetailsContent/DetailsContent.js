import React from "react";
import { Route } from "react-router-dom";
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
    </div>
  );
};

export default DetailsContent;
