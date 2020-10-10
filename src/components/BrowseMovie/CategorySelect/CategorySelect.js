import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./CategorySelect.module.css";

const CategorySelect = ({ categories }) => {
  // const list = categories.map((category) => (
  //   <NavLink
  //     key={category.id}
  //     to={`/movies/browse/${category.id}`}
  //     className={styles.link}
  //     activeClassName={styles.active}
  //   >
  //     <span>{category.name}</span>
  //   </NavLink>
  // ));

  const list = categories.map((category) => (
    <NavLink
      key={category.id}
      to={`/movies/browse/${category.name}`}
      className={styles.link}
      activeClassName={styles.active}
    >
      <span>{category.name}</span>
    </NavLink>
  ));

  return (
    <div className={styles.browseContainer}>
      <NavLink
        to={`/all`}
        className={styles.link}
        activeClassName={styles.active}
      >
        <span>All</span>
      </NavLink>
      {list}
    </div>
  );
};

export default CategorySelect;
