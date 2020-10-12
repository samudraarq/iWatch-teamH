import React, { useState, useEffect, useContext } from "react";
import SignUpToModal from "./SignUp/SignUptoModal";
import styles from "./Navbar.module.css";
import LogoMilan from "../LogoMilan/LogoMilan";
import DropDownMenu from "./DropDownMenu";
import Search from "./Search/Search";
import useWindowSize from "../Hooks/useWindowResize";
import { UserContext } from "../Context/UserContext";
import { useHistory } from "react-router-dom";

const Navbar = ({ scrollChange }) => {
  // const [isLogin, setIsLogin] = useState(false);
  // const [token, setToken] = useState(localStorage.getItem("token"));
  const [smallDevice, setSmallDevice] = useState(false);

  const history = useHistory();

  const {
    isLogin,
    setIsLogin,
    setUserToken,
    setUsername,
    setUserEmail,
    setUserId,
    setUserImg,
    setUserFullname,
  } = useContext(UserContext);

  const [width] = useWindowSize();

  useEffect(() => {
    if (width < 600) {
      setSmallDevice(true);
    } else {
      setSmallDevice(false);
    }
  }, [width]);

  useEffect(() => {
    // console.log(localStorage.getItem("token"));
    if (localStorage.getItem("token")) {
      setIsLogin(true);
      setUserToken(localStorage.getItem("token"));
      setUsername(localStorage.getItem("username"));
      setUserEmail(localStorage.getItem("email"));
      setUserId(localStorage.getItem("userId"));
      setUserImg(localStorage.getItem("image"));
      setUserFullname(localStorage.getItem("full_name"));
      // setImage(
      //   "https://cdn-2.tstatic.net/tribunnews/foto/bank/images/tes-kepribadian-gambar-pertama-11.jpg"
      // );
    } else {
      setIsLogin(false);
    }
  }, [
    setIsLogin,
    setUserToken,
    setUsername,
    setUserEmail,
    setUserId,
    setUserImg,
    setUserFullname,
  ]);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("userId");
    localStorage.removeItem("image");
    localStorage.removeItem("full_name");
    setUserToken("");
    setUsername("");
    setUserEmail("");
    setUserId("");
    setUserImg("");
    setUserFullname("");
    setIsLogin(false);
    history.push("/");
  };

  // Change navbar when scrolling
  const [scrollState, setScrollState] = useState("top");

  useEffect(() => {
    let listener = null;
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
  }, [scrollState, smallDevice, scrollChange]);

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
          {isLogin === false ? (
            <SignUpToModal setIsLogin={setIsLogin} scrollState={scrollState} />
          ) : (
            <DropDownMenu
              handleLogOut={handleLogOut}
              scrollState={scrollState}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
