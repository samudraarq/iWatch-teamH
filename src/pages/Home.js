import React from "react";
import BrowseMovie from "../components/BrowseMovie/BrowseMovie";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer"
import Navbar from "../components/NavBar/Navbar"

const Home = () => {
  return (
    <div>      
      <Navbar />
      <Carousel />
      <BrowseMovie />
      <Footer />
    </div>
  );
};

export default Home;
