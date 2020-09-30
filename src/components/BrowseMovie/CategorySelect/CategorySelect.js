import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./CategorySelect.module.css";

const CategorySelect = ({ categories }) => {
  const list = categories.map((category, idx) => (
    <NavLink
      key={idx}
      to={`/movies/browse/${category}`}
      className={styles.link}
      activeClassName={styles.active}
    >
      <span>{category}</span>
    </NavLink>
  ));

  return <div className={styles.browseContainer}>{list}</div>;
};

export default CategorySelect;
