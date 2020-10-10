import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import "./App.css";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import SearchPages from "./pages/SearchPages";
import AddMovie from "./components/AddMovie/AddMovie";

function App() {
  return (
    <StylesProvider injectFirst>
      <BrowserRouter>
        <Switch>
          <Route path="/movie/details/:id">
            <MovieDetails />
          </Route>
          <Route path="/search/:inputSearch">
            <SearchPages />
          </Route>
          <Route path="/movie/add">
            <AddMovie />
          </Route>
          <Route path="/">
            <Redirect to="/all" />
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
}

export default App;
