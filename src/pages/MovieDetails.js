import React, { useEffect } from "react";
import axios from "axios";
import DetailsHeader from "../components/DetailsHeader/DetailsHeader";
import DetailsContent from "../components/DetailsContent/DetailsContent";
import { useParams } from "react-router-dom";
import { useState } from "react";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      );
      const result = await res.data;
      console.log(result);
      setMovie(result);
    };
    getMovies();
  }, []);

  return (
    <div>
      <DetailsHeader movie={movie} />
      <DetailsContent movId={id} movie={movie} />
    </div>
  );
};

export default MovieDetails;
