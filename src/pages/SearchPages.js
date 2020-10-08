import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavBar/Navbar";
import SearchResult from "../components/SearchResult/SearchResult";

const SearchPages = () => {
  return (
    <>
      <Navbar scrollChange="30" />
      <SearchResult />
      <Footer />
    </>
  );
};
export default SearchPages;
