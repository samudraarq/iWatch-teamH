import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./DetailsNav.module.css";

const DetailsNav = ({ movId }) => {
  return (
    <div>
      <NavLink
        to={`/movie/details/${movId}/overview`}
        className={styles.link}
        activeClassName={styles.active}
      >
        <span>Overview</span>
      </NavLink>
      <NavLink
        to={`/movie/details/${movId}/characters`}
        className={styles.link}
        activeClassName={styles.active}
      >
        <span>Characters</span>
      </NavLink>
      <NavLink
        to={`/movie/details/${movId}/reviews`}
        className={styles.link}
        activeClassName={styles.active}
      >
        <span>Reviews</span>
      </NavLink>
    </div>
  );
};

export default DetailsNav;
