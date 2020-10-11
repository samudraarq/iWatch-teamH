import { makeStyles, Modal } from "@material-ui/core";
import React, { useState } from "react";
import ModalSignIn from "../../../Modal/ModalSignIn";
import ModalSignUp from "../../../Modal/ModalSignUp";
import styles from "./NotLoginBox.module.css";

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
    outline: "none",
  },
}));

const NotLoginBox = () => {
  const [open, setOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(true);

  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

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
          <ModalSignIn setIsSignup={setIsSignup} handleClose={handleClose} />
        ) : (
          <ModalSignUp setIsSignup={setIsSignup} handleClose={handleClose} />
        )}
        <button className={styles.btnClose} onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <p className={styles.text}>
        Please <span onClick={handleOpen}>Sign up or Login</span> to give a
        review!
      </p>
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

export default NotLoginBox;
