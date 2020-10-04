import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import "./App.css";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <StylesProvider injectFirst>
      <BrowserRouter>
        <Switch>
          <Route path="/movie/details/:id">
            <MovieDetails />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
}

export default App;
