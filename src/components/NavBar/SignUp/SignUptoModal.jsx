import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import ModalMilan from "../../Modal/Modal2";
import ModalLogin from "../../Modal/Modal";
import SignIn from "../SignIn/SignIn";
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
    // width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    // boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const SignUpToModal = () => {
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
      {isSignup ? (
        <ModalMilan setIsSignup={setIsSignup} />
      ) : (
        <ModalLogin setIsSignup={setIsSignup} />
      )}

      <button className="btn btn-warning" onClick={handleClose}>
        Close
      </button>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen} className={styles.button}>
        <SignIn />
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
