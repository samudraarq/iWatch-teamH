import React from "react";
import BrowseMovie from "../components/BrowseMovie/BrowseMovie";
import Carousel from "../components/Carousel/Carousel";

const Home = () => {
  return (
    <div>
      <Carousel />
      <BrowseMovie />
    </div>
  );
};

export default Home;
