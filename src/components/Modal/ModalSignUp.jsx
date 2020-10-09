import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import LogoMilan from "../LogoMilan/LogoMilan";
import styles from './Modal.module.css'


const ModalSignUp = ({ setIsSignup, setIsLogin, handleClose }) => (
  <Formik    
        initialValues={{          
          username:"",
          email: "",
          password: "",  
          fullname:"default fullname", 
          bio:"default bio"
        }}
        
        validationSchema={Yup.object({
        username: Yup.string()
            .min(4,"Username is too short")
            .required("Required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        password: Yup.string()
            .min(6, "Password must be >6 characters")
            .required("Required"),
        })}
        onSubmit={({ username, email, password, fullname, bio }) => {   
            // e.preventDefault()       
            fetch('https://appdoto.herokuapp.com/api/users/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username, email, password, fullname, bio})
            })
            .then(res => res.json())
            .then(result => {
                console.log('Success:', result);
                localStorage.setItem('token', result.data.token);
                localStorage.setItem('username',result.data.username)
                localStorage.setItem('isLogin', true);
                handleClose()
                setIsLogin(true)
            }).catch((err)=>(console.log("error")))

        }}
      >
        
    <Form>
    <LogoMilan />
      <div className={styles.inputContainer}>
        <Field name="username" type="text" placeholder="Username" className={styles.input}/>
        <ErrorMessage name="username">
          {
            (msg) =><span className={styles.error}>{msg}</span>
          }
        </ErrorMessage>
      </div>
      
      <div className={styles.inputContainer}>
        <Field name="email" type="text" placeholder="Email Address" className={styles.input}/>
        <ErrorMessage name="email">
          {
            (msg) => <span className={styles.error}>{msg}</span>
          }
        </ErrorMessage>
      </div>
      

      <div className={styles.inputContainer}> 
        <Field name="password" type="password" placeholder="Password" className={styles.input}/>      
        <ErrorMessage name="password">
          {
            (msg) => <span className={styles.error}>{msg}</span>
          }
        </ErrorMessage>
      </div>

      <p className={styles.switchForm}>
        {"Already have an account? "}
        <span
          href="#"
          variant="body2"
          onClick={() => setIsSignup(true)}
        >
          Sign in
        </span>
      </p>
      <button type="submit" className={styles.btnSubmit}>Submit</button>
    </Form>
  </Formik>
)



export default ModalSignUp;
