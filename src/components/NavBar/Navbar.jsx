import React, { useState } from "react";
import SignUpToModal from "./SignUp/SignUptoModal";
import styles from "./Navbar.module.css";
import LogoMilan from "../LogoMilan/LogoMilan";

const Navbar = () => {
  const [ state, setState]=(useState({
    // isLogin: {localStorage.storage.getItem('isLogin')}  ,
    isLogin:false,
    token: localStorage.getItem('token')
  }))

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
        {state.isLogin==false ? <SignUpToModal /> : <div>log out</div>}
      </div>
    </React.Fragment>
  );
};
export default Navbar;
