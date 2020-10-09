import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import LogoMilan from "../LogoMilan/LogoMilan";


const ModalSignIn = ({ handleSubmit, setIsSignup, setIsLogin, handleClose }) => (        
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
            fetch('https://appdoto.herokuapp.com/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, password})
            })
            .then(res => res.json())
            .then(result => {
                console.log('Success:', result);
                localStorage.setItem('token', result.data.token);
                localStorage.setItem('username',result.data.username)
                localStorage.setItem('isLogin', true);   
                setIsLogin(true)             
                handleClose()
            }).catch((err)=>(console.log("error")))
          }}
      >
        
    <Form>
    <LogoMilan />
      <div>
        <Field name="email" type="text" placeholder="Email Address" />
        <ErrorMessage name="email">
          {
              (msg) => (<div>{msg}</div>)
          }
        </ErrorMessage>
      </div>
      

      <div>
        <Field name="password" type="password" placeholder="Password" />
        <ErrorMessage name="password">
          {
            (msg) => <div>{msg}</div>
          }
        </ErrorMessage>
      </div>
      
      <p>
        {"Doesn't have an account? "}
        <span
          href="#"
          variant="body2"
          onClick={() => setIsSignup(false)}
        >
          Sign Up
        </span>
      </p>
      <button type="submit">Submit</button>
    </Form>
  </Formik>
)

export default ModalSignIn;
