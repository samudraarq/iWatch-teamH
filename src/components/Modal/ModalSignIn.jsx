import React, { useContext, useState } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import LogoMilan from "../LogoMilan/LogoMilan";
import styles from "./Modal.module.css";
import { UserContext } from "../Context/UserContext";

const ModalSignIn = ({ setIsSignup, handleClose }) => {
  const [errorMsg, setErrorMsg] = useState("");

  const { setIsLogin, setUserToken, setUsername, setUserEmail } = useContext(
    UserContext
  );

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(6, "Password must be >6 characters")
          .required("Required"),
      })}
      onSubmit={({ email, password }) => {
        fetch("https://aqueous-savannah-95860.herokuapp.com/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.token) {
              console.log("Success:", result);
              localStorage.setItem("token", result.access_token);
              localStorage.setItem("username", result.username);
              localStorage.setItem("email", result.email);
              setIsLogin(true);
              setUserToken(result.access_token);
              setUsername(result.username);
              setUserEmail(result.email);
              handleClose();
            } else {
              setErrorMsg(result.msg);
            }
          })
          .catch((err) => console.log("error", err));
      }}
    >
      <Form>
        <LogoMilan />
        <div className={styles.inputContainer}>
          <Field
            name="email"
            type="text"
            placeholder="Email Address"
            className={styles.input}
          />
          <ErrorMessage name="email">
            {(msg) => <span className={styles.error}>{msg}</span>}
          </ErrorMessage>
        </div>
        <div className={styles.inputContainer}>
          <Field
            name="password"
            type="password"
            placeholder="Password"
            className={styles.input}
          />
          <ErrorMessage name="password">
            {(msg) => <span className={styles.error}>{msg}</span>}
          </ErrorMessage>
        </div>
        <p className={styles.switchForm}>
          {"Doesn't have an account? "}
          <span href="#" variant="body2" onClick={() => setIsSignup(false)}>
            Sign Up
          </span>
        </p>
        <button type="submit" className={styles.btnSubmit}>
          Submit
        </button>
        <p className={styles.errMsg}>{errorMsg}</p>
      </Form>
    </Formik>
  );
};

export default ModalSignIn;
