import React from "react";
import styles from "./DetailsHeader.module.css";
import YouTubeIcon from "@material-ui/icons/YouTube";
import AddIcon from "@material-ui/icons/Add";

const DetailsHeader = ({ movie }) => {
  // const [trailer, setTrailer] = useState([]);

  // const { id } = useParams();

  // useEffect(() => {
  //   const getMovies = async () => {
  //     const res = await axios.get(
  //       `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
  //     );
  //     const result = await res.data;
  //     // console.log(result);
  //     setTrailer(result.results);
  //   };
  //   getMovies();
  // }, [id]);

  const backdropUrl = `url(${movie.img_url_backdrop})`;
  const movieTitle = movie.title;
  // const movieRating = movie.vote_average / 2;
  // const reviewsNumber = movie.vote_count;
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
        {/* <div className={styles.reviews}>
          <Rating
            name="movie-rating"
            defaultValue={movieRating}
            precision={0.2}
            className={styles.rating}
            readOnly
          />
          <span className={styles.reviewsNumber}>{reviewsNumber} reviews</span>
        </div> */}
        <p className={styles.overview}>{movie.synopsis}</p>
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
          <button
            className={styles.watchList}
            onClick={() => console.log("clicked")}
          >
            <div className={styles.btnContainer}>
              <AddIcon className={styles.icon} />
              <span>Add to Watchlist</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );

  return <>{movie.title && bdrop}</>;
};

export default DetailsHeader;
