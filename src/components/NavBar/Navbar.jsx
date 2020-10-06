import React, { useState } from "react";
import SignUpToModal from "./SignUp/SignUptoModal";
import styles from "./Navbar.module.css";
import LogoMilan from "../LogoMilan/LogoMilan";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <LogoMilan />
        <input
          type="text"
          className={styles.input}
          placeholder="Search movies"
        ></input>
        {/* <SignUp />             */}
        <SignUpToModal />
      </div>
    </React.Fragment>
  );
};
export default Navbar;
