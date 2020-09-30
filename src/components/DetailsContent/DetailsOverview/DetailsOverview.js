import React from "react";
import { useParams } from "react-router-dom";

const DetailsOverview = () => {
  const { id } = useParams();
  return <div>From details overview {id}</div>;
};

export default DetailsOverview;
