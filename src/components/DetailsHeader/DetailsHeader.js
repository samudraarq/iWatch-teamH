import React from "react";
import styles from "./DetailsHeader.module.css";
import Rating from "@material-ui/lab/Rating";

const DetailsHeader = () => {
  const backdropUrl =
    "url(https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)";
  const movieTitle = "Saint Seiya";
  const movieRating = 4.2;
  const reviewsNumber = 2200;

  return (
    <div
      className={styles.backdrop}
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(131, 131, 131, 0.5))," +
          backdropUrl,
      }}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>{movieTitle}</h2>
        <div className={styles.reviews}>
          <Rating
            name="movie-rating"
            defaultValue={movieRating}
            precision={0.2}
            className={styles.rating}
            readOnly
          />
          <span className={styles.reviewsNumber}>{reviewsNumber} reviews</span>
        </div>
        <p className={styles.overview}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A
          consequuntur ea suscipit accusamus laudantium delectus doloribus quis
          corporis ipsam velit perferendis adipisci, labore consectetur
          laboriosam omnis commodi quo excepturi veniam.
        </p>
        <div className={styles.btnGroup}>
          <a className={styles.trailerLink}>Watch Trailer</a>
          <button className={styles.watchList}>Add to Watchlist</button>
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
