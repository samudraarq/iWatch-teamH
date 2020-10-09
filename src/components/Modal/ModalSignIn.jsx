import React, {useState} from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Lock, Mail } from "react-feather";
// import styled from "styled-components";
import LogoMilan from "../LogoMilan/LogoMilan";

// const InputContainer = styled.div`
//   width: 100%;
//   position: relative;
//   margin-bottom: 2.4rem;
// `;

// const Icon = styled.span`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   left: 1.5rem;
// `;

// const Field = styled(Field)`
//   width: 100%;
//   height: 5.6rem;
//   padding-left: 5.2rem;
//   border: 2px solid #18191f;
//   border-radius: 16px;
//   font-family: inherit;
//   font-size: 2.1rem;
//   color: #18191f;
//   outline: none;
//   /* Remove number input arrow */
//   /* Chrome, Safari, Edge, Opera */
//   &::-webkit-outer-spin-button,
//   &::-webkit-inner-spin-button {
//     -webkit-appearance: none;
//     margin: 0;
//   }
//   /* Firefox */
//   &[type="number"] {
//     -moz-appearance: textfield;
//   }
// `;

// const Alert = styled.div`
//   color: #f95a2c;
//   padding-left: 2rem;
//   margin-top: -2rem;
//   margin-bottom: 1.5rem;
//   font-size: 1.3rem;
// `;

// const Button = styled.button`
//   width: 100%;
//   height: 6rem;
//   background: #ffbd12;
//   border: 2px solid #18191f;
//   box-shadow: 0px 2px 0px #18191f;
//   border-radius: 16px;
//   font-family: inherit;
//   font-weight: 800;
//   font-size: 2.1rem;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   outline: none;
//   &:hover {
//     transform: translateY(-3px);
//     box-shadow: 0px 5px 0px #18191f;
//   }
//   &:active {
//     transform: translateY(1px);
//     box-shadow: 0px 1px 0px #18191f;
//   }
// `;

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
