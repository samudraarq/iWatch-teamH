import React from "react";
import styles from "./DetailsHeader.module.css";
import Rating from "@material-ui/lab/Rating";

const DetailsHeader = ({ movie }) => {
  const backdropUrl = `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`;
  const movieTitle = movie.title;
  const movieRating = movie.vote_average / 2;
  const reviewsNumber = movie.vote_count;

  const bdrop = (
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

  return <>{movie.title && bdrop}</>;
};

export default DetailsHeader;
