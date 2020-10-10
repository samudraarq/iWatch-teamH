import React, { useEffect } from "react";
import axios from "axios";
import DetailsHeader from "../components/DetailsHeader/DetailsHeader";
import DetailsContent from "../components/DetailsContent/DetailsContent";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get(
        `https://aqueous-savannah-95860.herokuapp.com/movie/id/${id}`
      );
      const result = await res.data;
      // console.log(result);
      setMovie(result);
    };
    getMovies();
  }, [id]);

  return (
    <div>
      <Navbar />
      <DetailsHeader movie={movie} />
      <DetailsContent movId={id} movie={movie} />
      <Footer />
    </div>
  );
};

export default MovieDetails;
