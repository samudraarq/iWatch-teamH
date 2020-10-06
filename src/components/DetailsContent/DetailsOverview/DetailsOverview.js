import React from "react";
import styles from "./DetailsOverview.module.css";

const DetailsOverview = ({ movie }) => {
  return (
    <div className={styles.overviewContainer}>
      <h3 className={styles.title}>Synopsis</h3>
      <p className={styles.content}>{movie.overview}</p>
      <h3 className={styles.title}>Movie Info</h3>
      <ul className={styles.list}>
        <li>Release Date: {movie.release_date}</li>
        <li>Director: Edward Kenway</li>
        <li>Featured Song: Pegasus Fantasy</li>
        <li>Budget: {movie.revenue}</li>
      </ul>
    </div>
  );
};

export default DetailsOverview;
