import React, { useEffect, useState } from "react";
import BrowseMovie from "../components/BrowseMovie/BrowseMovie";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer"
import useWindowSize from "../components/Hooks/useWindowResize";
import Navbar from "../components/NavBar/Navbar"


const Home = () => {
  const [smallDevice, setSmallDevice] = useState(false)

  const [width, height] = useWindowSize();

  useEffect(() => {
    if (width < 600) {
      setSmallDevice(true);
    } else {
      setSmallDevice(false);
    }
  }, [width]);

  return (
    <div>      
      <Navbar />
      {!smallDevice && <Carousel />}
      <BrowseMovie />
      <Footer />
    </div>
  );
};

export default Home;
