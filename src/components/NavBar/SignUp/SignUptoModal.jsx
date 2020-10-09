import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import ModalSignUp from "../../Modal/ModalSignUp";
import ModalSignIn from "../../Modal/ModalSignIn";
import SignUp from "../SignUp/SignUp";
import styles from "./SignUp.module.css";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    backgroundColor: "#3e3639",
    padding: theme.spacing(2, 4, 3),
    outline: "none"
  },
}));

const SignUpToModal = ({ setIsLogin, scrollState }) => {
  const [isSignup, setIsSignup] = useState(true);
  const classes = useStyles();

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
    <div className={styles.modalContainer}>      
    {isSignup ? (
        <ModalSignIn
          setIsSignup={setIsSignup}
          setIsLogin={setIsLogin}
          handleClose={handleClose}
        />
      ) : (
        <ModalSignUp
          setIsSignup={setIsSignup}
          setIsLogin={setIsLogin}
          handleClose={handleClose}
        />
      )}

      <button className={styles.btnClose} onClick={handleClose}>
        Close
      </button>

    </div>

    </div>
  );

  return (
    <div>
      <button
        type="button"
        onClick={handleOpen}
        className={`${styles.button} ${
          scrollState === "nottop" && styles.changeColor
        }`}
      >
        <SignUp />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
       
      >
        {body}
      </Modal>
    </div>
  );
};
export default SignUpToModal;
