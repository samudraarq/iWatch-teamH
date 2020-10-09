import React, { useState } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Lock, Mail } from "react-feather";
// import styled from "styled-components";
import LogoMilan from "../LogoMilan/LogoMilan";

// import {
//   Avatar,
//   Button,
//   CssBaseline,
//   TextField,
//   Link,
//   Grid,
//   Box,
//   Container,
// } from "@material-ui/core";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";
// import LogoMilan from "../LogoMilan/LogoMilan";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   typography: {
//     marginLeft: theme.spacing(1),
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

const ModalSignUp = ({ setIsSignup, setIsLogin, handleClose }) => (
  // const classes = useStyles();
  
  // const [ state, setState] = useState({
  //   email:"",
  //   password:"",
  //   username:"", 
  //   fullname:"andri3", 
  //   bio:"bio3"
  // });

  // const handleChange = (e) => {
  //   console.log(e.target.value);
  //   console.log(e.target.name)
  //   setState({...state, [e.target.name]:e.target.value})
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   fetch('http://appdoto.herokuapp.com/api/users/', {
  //       method: 'POST',
  //       headers: {
  //           'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(state)
  //   })
  //   .then(res => res.json())
  //   .then(result => {
  //       console.log('Success:', result);
  //       localStorage.setItem('token', result.data.token);
  //       localStorage.setItem('isLogin', true);
  //       localStorage.setItem('username', result.data.username);        
  //       setIsLogin(true)
  //       handleClose()
  //   })
  // }
  // return (
  //   <Container component="main" maxWidth="xs">
  //     <CssBaseline />
  //     <div className={classes.paper}>
  //       <LogoMilan />
  //       <form className={classes.form} noValidate onSubmit={handleSubmit}>
  //         <Grid container spacing={2}>
  //           <Grid item xs={12}>
  //             <Typography component="div" variant="h6" spacing={2}>
  //               User Name
  //             </Typography>
  //             <TextField
  //               variant="outlined"
  //               required
  //               fullWidth
  //               id="username"
  //               name="username"
  //               autoComplete="username"
  //               onChange={handleChange}                
  //             />
  //           </Grid>
  //           <Typography
  //             component="div"
  //             variant="h6"
  //             className={classes.typography}
  //           >
  //             Email
  //           </Typography>
  //           <Grid item xs={12}>
  //             <TextField
  //               variant="outlined"
  //               required
  //               fullWidth
  //               id="email"
  //               name="email"
  //               autoComplete="email"
  //               onChange={handleChange}     
  //             />
  //           </Grid>
  //           <Typography
  //             component="div"
  //             variant="h6"
  //             className={classes.typography}
  //           >
  //             Password
  //           </Typography>
  //           <Grid item xs={12}>
  //             <TextField
  //               variant="outlined"
  //               required
  //               fullWidth
  //               name="password"
  //               type="password"
  //               id="password"
  //               autoComplete="current-password"
  //               onChange={handleChange}     
  //             />
  //           </Grid>
  //         </Grid>
  //         <Button
  //           type="submit"
  //           fullWidth
  //           variant="contained"
  //           color="primary"
  //           className={classes.submit}            
  //         >
  //           Sign Up
  //         </Button>
  //         <Grid container justify="flex-end">
  //           <Grid item>
  //             <Typography component="div" variant="p">
  //               {"Already have an account? "}
  //               <span
  //                 href="#"
  //                 variant="body2"
  //                 onClick={() => setIsSignup(true)}
  //               >
  //                 Sign in
  //               </span>
  //             </Typography>
  //           </Grid>
  //         </Grid>
  //       </form>
  //     </div>
  //     <Box mt={5}>
  //       <Copyright />
  //     </Box>
  //   </Container>
  // );
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
      <div>
        <Field name="username" type="text" placeholder="Username" />
        <ErrorMessage name="username">
          {
            (msg) => <div>{msg}</div>
          }
        </ErrorMessage>
      </div>
      
      <div>
        <Field name="email" type="text" placeholder="Email Address" />
        <ErrorMessage name="email">
          {
            (msg) => <div>{msg}</div>
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
        {"Already have an account? "}
        <span
          href="#"
          variant="body2"
          onClick={() => setIsSignup(true)}
        >
          Sign in
        </span>
      </p>
      <button type="submit">Submit</button>
    </Form>
  </Formik>
)



export default ModalSignUp;
