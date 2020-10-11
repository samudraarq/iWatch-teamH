import React from "react";
import styles from "./DetailsOverview.module.css";
import moment from "moment";

const DetailsOverview = ({ movie }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  // const songs = movie?.Songs?.map((song) => (
  //   <p key={song.id}>
  //     {song.featured_song} - {song.artist}
  //   </p>
  // ));

  return (
    <div className={styles.overviewContainer}>
      <h3 className={styles.title}>Synopsis</h3>
      <p className={styles.content}>{movie.synopsis}</p>
      <h3 className={styles.title}>Movie Info</h3>
      <ul className={styles.list}>
        <li>Release Date: {moment(movie.release_date).format("DD-MM-YYYY")}</li>
        <li>Director: {movie.director}</li>
        {/* <li>Featured Song: {songs}</li> */}
        <li>Budget: {formatter.format(movie.budget)}</li>
      </ul>
    </div>
  );
};

export default DetailsOverview;
