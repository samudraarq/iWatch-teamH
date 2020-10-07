import React, { useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Container,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import LogoMilan from "../LogoMilan/LogoMilan";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  typography: {
    marginLeft: theme.spacing(1),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const ModalSignIn = ({ setIsSignup }) => {
  const classes = useStyles();

  const [ state, setState] = useState({
    email:"",
    password:""
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name)
    setState({...state, [e.target.name]:e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://appdoto.herokuapp.com/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(state)
    })
    .then(res => res.json())
    .then(result => {
        console.log('Success:', result);
        localStorage.setItem('token', result.data.token);
        localStorage.setItem('isLogin', true);
    })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <LogoMilan />
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Typography
              component="div"
              variant="h6"
              className={classes.typography}
            >
              Email
            </Typography>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                name="email"
                autoComplete="email"
                onChange={handleChange}                
              />
            </Grid>
            <Typography
              component="div"
              variant="h6"
              className={classes.typography}
            >
              Password
            </Typography>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}    
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onSubmit={handleSubmit}
          >
            Sign In
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Typography component="div" variant="p">
                {"Don't have an account? "}
                <span
                  href="#"
                  variant="body2"
                  onClick={() => setIsSignup(true)}
                >
                  Sign up
                </span>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default ModalSignIn;
