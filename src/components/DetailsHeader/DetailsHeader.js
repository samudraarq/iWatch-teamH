import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./DetailsHeader.module.css";
import YouTubeIcon from "@material-ui/icons/YouTube";
// import AddIcon from "@material-ui/icons/Add";
import { useParams } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const DetailsHeader = ({ movie }) => {
  const [rating, setRating] = useState(0);

  const { id } = useParams();

  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get(
        `https://aqueous-savannah-95860.herokuapp.com/review/rating/${id}`
      );
      const result = await res.data;
      // console.log(result);
      setRating(result);
    };
    getMovies();
  }, [id]);

  const backdropUrl = `url(${movie.img_url_backdrop})`;
  const movieTitle = movie.title;
  // const youtubeLink = trailer.find(
  //   (trail) => trail.site === "YouTube" && trail.type === "Trailer"
  // );

  const trailerLink = movie.trailer_url;

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
            defaultValue={rating.average_rating || 0}
            precision={0.1}
            className={styles.rating}
            readOnly
          />
          <span className={styles.reviewsNumber}>
            {rating.total_reviewer} reviews
          </span>
        </div>
        <p className={styles.overview}>
          {movie.synopsis?.length > 400
            ? movie.synopsis.slice(0, 400) + "..."
            : movie.synopsis}
        </p>
        <div className={styles.btnGroup}>
          {trailerLink && (
            <a
              className={styles.trailerLink}
              // href={"https://www.youtube.com/watch?v=" + youtubeLink.key}
              href={trailerLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className={styles.btnContainer}>
                <YouTubeIcon className={styles.icon} />
                <span>Watch Trailer</span>
              </div>
            </a>
          )}
          {/* <button
            className={styles.watchList}
            onClick={() => console.log("clicked")}
          >
            <div className={styles.btnContainer}>
              <AddIcon className={styles.icon} />
              <span>Add to Watchlist</span>
            </div>
          </button> */}
        </div>
      </div>
    </div>
  );

  return <>{movie.title && bdrop}</>;
};

export default DetailsHeader;
