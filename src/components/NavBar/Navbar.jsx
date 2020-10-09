import React, { useState, useEffect } from "react";
import SignUpToModal from "./SignUp/SignUptoModal";
import styles from "./Navbar.module.css";
import LogoMilan from "../LogoMilan/LogoMilan";
import DropDownMenu from "./DropDownMenu";
import Search from "./Search/Search";
import useWindowSize from "../Hooks/useWindowResize";

const Navbar = ({ scrollChange }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [image, setImage] = useState("");
  const [smallDevice, setSmallDevice] = useState(false)

  const [width, height] = useWindowSize();

  useEffect(() => {
    if (width < 600) {
      setSmallDevice(true);
    } else {
      setSmallDevice(false);
    }
  }, [width]);

  useEffect(() => {
    console.log(localStorage.getItem("token"));
    if (localStorage.getItem("token")) {
      setIsLogin(true);
      setImage(
        "https://cdn-2.tstatic.net/tribunnews/foto/bank/images/tes-kepribadian-gambar-pertama-11.jpg"
      );
    } else {
      setIsLogin(false);
    }
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsLogin(false);
  };

  // Change navbar when scrolling
  let listener = null;
  const [scrollState, setScrollState] = useState("top");

  useEffect(() => {
    listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      // console.log(scrolled);
      let scrollTop = scrollChange ? scrollChange : smallDevice ? 20 : 400;
      if (scrolled >= scrollTop) {
        if (scrollState !== "nottop") {
          setScrollState("nottop");
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top");
        }
      }
    });
    // console.log(scrollState);
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  return (
    <div
      className={`${styles.navbar} ${
        scrollState === "nottop" && styles.changeBg
      }`}
    >
      <div className={styles.container}>
        <LogoMilan scrollState={scrollState} />
        <div className={styles.searchLogin}>
          <Search />
          {isLogin == false ? (
            <SignUpToModal setIsLogin={setIsLogin} scrollState={scrollState} />
          ) : (
            <DropDownMenu
              handleLogOut={handleLogOut}
              image={image}
              scrollState={scrollState}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
