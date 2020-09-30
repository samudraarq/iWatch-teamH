import React from "react";
import DetailsHeader from "../components/DetailsHeader/DetailsHeader";
import DetailsContent from "../components/DetailsContent/DetailsContent";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <DetailsHeader />
      <DetailsContent movId={id} />
    </div>
  );
};

export default MovieDetails;
