import React, { useState, useEffect } from "react";
import SignUpToModal from "./SignUp/SignUptoModal";
import styles from "./Navbar.module.css";
import LogoMilan from "../LogoMilan/LogoMilan";
import DropDownMenu from "./DropDownMenu";
import Search from "./Search/Search";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [image, setImage] = useState("");

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
      if (scrolled >= 500) {
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
  );
};
export default Navbar;
