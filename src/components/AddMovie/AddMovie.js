import React, { useState } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import qs from "qs";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";
import styles from "./AddMovie.module.css";

const AddMovie = () => {
  const [addSuccess, setAddSuccess] = useState(false);
  const [movieId, setMovieId] = useState("");
  const [movieDir, setMovieDir] = useState("");
  const [movie, setMovie] = useState({});
  const [trailer, setTrailer] = useState([]);

  const handleChange = (e) => {
    setMovieId(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      const getMovies = async () => {
        const resMovie = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
        );
        const resultMovie = await resMovie.data;
        // console.log(resultMovie);
        setMovie(resultMovie);
        const resTrailer = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
        );
        const resultTrailer = await resTrailer.data;
        // console.log(resultTrailer);
        setTrailer(resultTrailer.results);
      };
      getMovies();
    }
  };

  const youtubeLink = trailer.find(
    (trail) => trail.site === "YouTube" && trail.type === "Trailer"
  );

  const submitHandlerToDb = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
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
          console.log(response);
          setAddSuccess(true);
        })
        .catch(function (error) {
          console.log(error);
        });
      console.log(data);
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <input
          type="text"
          onChange={handleChange}
          onKeyUp={submitHandler}
          value={movieId}
        />

        <p style={{ color: "white" }}>{movie.title}</p>

        <input
          type="text"
          onChange={(e) => setMovieDir(e.target.value)}
          onKeyUp={submitHandlerToDb}
        />

        {/* <Formik
          initialValues={{
            img_url_backdrop: "",
            img_url_poster: "",
            title: "",
            genre: "",
            date_data_in: new Date(),
            release_date: new Date(),
            synopsis: "",
            director: "",
            budget: "",
            trailer_url: "",
          }}
          validationSchema={Yup.object({
            img_url_backdrop: Yup.string().required("Required"),
            img_url_poster: Yup.string().required("Required"),
            title: Yup.string().required("Required"),
            genre: Yup.string().required("Required"),
            synopsis: Yup.string().required("Required"),
            director: Yup.string().required("Required"),
            budget: Yup.string().required("Required"),
            trailer_url: Yup.string().required("Required"),
          })}
          onSubmit={(data, actions) => {
            setAddSuccess(false);
            console.log({ ...data });
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
                console.log(response);
                actions.resetForm();
                setAddSuccess(true);
              })
              .catch(function (error) {
                console.log(error);
              });
          }}
        >
          <Form>
            <div className={styles.inputContainer}>
              <Field
                name="img_url_backdrop"
                type="text"
                placeholder="img_url_backdrop"
                className={styles.input}
              />
              <ErrorMessage name="img_url_backdrop">
                {(msg) => <span className={styles.error}>{msg}</span>}
              </ErrorMessage>
            </div>
            <div className={styles.inputContainer}>
              <Field
                name="img_url_poster"
                type="text"
                placeholder="img_url_poster"
                className={styles.input}
              />
              <ErrorMessage name="img_url_poster">
                {(msg) => <span className={styles.error}>{msg}</span>}
              </ErrorMessage>
            </div>
            <div className={styles.inputContainer}>
              <Field
                name="title"
                type="text"
                placeholder="title"
                className={styles.input}
              />
              <ErrorMessage name="title">
                {(msg) => <span className={styles.error}>{msg}</span>}
              </ErrorMessage>
            </div>
            <div className={styles.inputContainer}>
              <Field
                name="genre"
                type="text"
                placeholder="genre"
                className={styles.input}
              />
              <ErrorMessage name="genre">
                {(msg) => <span className={styles.error}>{msg}</span>}
              </ErrorMessage>
            </div>
            <div className={styles.inputContainer}>
              <Field
                name="release_date"
                type="date"
                placeholder="release_date"
                className={styles.input}
              />
              <ErrorMessage name="release_date">
                {(msg) => <span className={styles.error}>{msg}</span>}
              </ErrorMessage>
            </div>
            <div className={styles.inputContainer}>
              <Field
                name="synopsis"
                type="text"
                placeholder="synopsis"
                className={styles.input}
              />
              <ErrorMessage name="synopsis">
                {(msg) => <span className={styles.error}>{msg}</span>}
              </ErrorMessage>
            </div>
            <div className={styles.inputContainer}>
              <Field
                name="director"
                type="text"
                placeholder="director"
                className={styles.input}
              />
              <ErrorMessage name="director">
                {(msg) => <span className={styles.error}>{msg}</span>}
              </ErrorMessage>
            </div>
            <div className={styles.inputContainer}>
              <Field
                name="budget"
                type="number"
                placeholder="budget"
                className={styles.input}
              />
              <ErrorMessage name="budget">
                {(msg) => <span className={styles.error}>{msg}</span>}
              </ErrorMessage>
            </div>
            <div className={styles.inputContainer}>
              <Field
                name="trailer_url"
                type="text"
                placeholder="trailer_url"
                className={styles.input}
              />
              <ErrorMessage name="trailer_url">
                {(msg) => <span className={styles.error}>{msg}</span>}
              </ErrorMessage>
            </div>

            <button type="submit" className={styles.btnSubmit}>
              Submit
            </button>
          </Form>
        </Formik> */}
        {addSuccess && <span>Success Adding a Movie</span>}
      </div>
      <Footer />
    </>
  );
};

export default AddMovie;