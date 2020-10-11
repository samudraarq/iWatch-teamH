import React, { useEffect, useState } from "react";
// import { Field, Form, Formik, ErrorMessage } from "formik";
// import * as Yup from "yup";
import axios from "axios";
import qs from "qs";
import styles from "./AddMovie.module.css";

const AddMovie = ({ movieId }) => {
  const [addSuccess, setAddSuccess] = useState(false);
  const [addActorSuccess, setAddActorSuccess] = useState(false);
  const [addCharSuccess, setAddCharSuccess] = useState(false);
  const [returnMovId, setReturnMovId] = useState("");
  const [movieDir, setMovieDir] = useState("");
  const [movie, setMovie] = useState({});
  const [trailer, setTrailer] = useState([]);
  const [casts, setCasts] = useState([]);

  // const handleChange = (e) => {
  //   setMovieId(e.target.value);
  // };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   if (e.key === "Enter") {
  //     const getMovies = async () => {
  //       // get movie detail
  //       const resMovie = await axios.get(
  //         `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
  //       );
  //       const resultMovie = await resMovie.data;
  //       // console.log(resultMovie);
  //       setMovie(resultMovie);

  //       // get cast and director
  //       const resCast = await axios.get(
  //         `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
  //       );
  //       const resultCast = await resCast.data;
  //       // console.log("getMovies -> resultCast", resultCast);
  //       const director = resultCast.crew.find(
  //         (crew) => crew.job === "Director"
  //       );
  //       setMovieDir(director.name);

  //       const movieCasts = resultCast.cast.slice(0, 10);
  //       console.log(movieCasts);
  //       setCasts(movieCasts);

  //       // get trailer
  //       const resTrailer = await axios.get(
  //         `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
  //       );
  //       const resultTrailer = await resTrailer.data;
  //       // console.log(resultTrailer);
  //       setTrailer(resultTrailer.results);
  //     };
  //     getMovies();
  //   }
  // };

  useEffect(() => {
    const getMovies = async () => {
      // get movie detail
      const resMovie = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      );
      const resultMovie = await resMovie.data;
      // console.log(resultMovie);
      setMovie(resultMovie);

      // get cast and director
      const resCast = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      );
      const resultCast = await resCast.data;
      // console.log("getMovies -> resultCast", resultCast);
      const director = resultCast.crew.find((crew) => crew.job === "Director");
      setMovieDir(director?.name);

      const movieCasts = resultCast.cast.slice(0, 10);
      // console.log(movieCasts);
      setCasts(movieCasts);

      // get trailer
      const resTrailer = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      );
      const resultTrailer = await resTrailer.data;
      // console.log(resultTrailer);
      setTrailer(resultTrailer.results);
    };
    getMovies();
  }, [movieId]);

  const youtubeLink = trailer.find(
    (trail) => trail.site === "YouTube" && trail.type === "Trailer"
  );

  const submitHandlerToDb = (e) => {
    e.preventDefault();

    //   const getMovies = async () => {
    //     const res = await axios.get(
    //       `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    //     );
    //     const result = await res.data;
    //     console.log(result);
    //     setMovie(result);
    //   };
    //   getMovies();
    let data = {
      img_url_backdrop: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
      img_url_poster: "https://image.tmdb.org/t/p/w500/" + movie.poster_path,
      title: movie.title,
      genre: movie.genres[0].name,
      date_data_in: new Date(),
      release_date: movie.release_date,
      synopsis: movie.overview,
      director: movieDir,
      budget: movie.budget,
      trailer_url: "https://www.youtube.com/watch?v=" + youtubeLink.key,
    };

    const dataQs = qs.stringify(data);
    let config = {
      method: "post",
      url: `https://aqueous-savannah-95860.herokuapp.com/movie`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: dataQs,
    };
    axios(config)
      .then(function (response) {
        // console.log(response);
        setReturnMovId(response.data.id);
        setAddSuccess(true);
      })
      .catch(function (error) {
        console.log(error);
      });
    // console.log(data);
  };

  const submitHandlerAddActor = () => {
    // Add Actor data
    casts.forEach((cast) => {
      let data = {
        img_url: "https://image.tmdb.org/t/p/w500/" + cast.profile_path,
        name: cast.name,
      };
      const dataQs = qs.stringify(data);
      let config = {
        method: "post",
        url: `https://aqueous-savannah-95860.herokuapp.com/actor`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: dataQs,
      };
      axios(config)
        .then(function (response) {
          // console.log(response);
          setAddActorSuccess(true);

          // ADD Character DATA id no Actor has been added before
          let charData = {
            MovieId: returnMovId,
            ActorId: response.data.id,
          };

          let configChar = {
            method: "post",
            url: `https://aqueous-savannah-95860.herokuapp.com/character`,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            data: qs.stringify(charData),
          };

          axios(configChar)
            .then(function (res) {
              // console.log("res", res);
              // console.log("charData", charData);
              setAddCharSuccess(true);
            })
            .catch((err) => console.log(err));
        })
        .catch(function (error) {
          console.log(error);

          // Add Character data if actor has been added before

          axios
            .get(`https://aqueous-savannah-95860.herokuapp.com/actor`)
            .then((res) => {
              // console.log(res.data);
              const actorIdFound = res.data.find(
                (act) => act.name === cast.name
              );

              let charData = {
                MovieId: returnMovId,
                ActorId: actorIdFound.id,
              };
              // console.log("submitHandlerAddActor -> charData", charData);

              let configChar = {
                method: "post",
                url: `https://aqueous-savannah-95860.herokuapp.com/character`,
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                data: qs.stringify(charData),
              };

              axios(configChar)
                .then(function (res) {
                  // console.log("res", res);
                  // console.log("charData", charData);
                  setAddCharSuccess(true);
                })
                .catch((err) => console.log(err));
            });
        });
      // console.log(data);
    });
  };

  return (
    <>
      <div className={styles.containerMov}>
        <img
          src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
          alt="movie poster"
          className={styles.image}
        />

        <div>
          <p className={styles.title}>{movie.title}</p>

          <button onClick={submitHandlerToDb} className={styles.button}>
            Add Movie
          </button>
          <button onClick={submitHandlerAddActor} className={styles.button}>
            Add Actor
          </button>

          {addSuccess && (
            <span className={styles.success}>Success Adding a Movie</span>
          )}
          {addActorSuccess && (
            <span className={styles.success}>Success Adding Actors</span>
          )}
          {addCharSuccess && (
            <span className={styles.success}>Success Adding Characters</span>
          )}
        </div>
      </div>
    </>
  );
};

export default AddMovie;
