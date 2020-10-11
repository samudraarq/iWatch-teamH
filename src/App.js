import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import "./App.css";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import SearchPages from "./pages/SearchPages";
import SearchMovie from "./components/AddMovie/SearchMovie";
import UserContextProvider from "./components/Context/UserContext";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <UserContextProvider>
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
              <SearchMovie />
            </Route>
            <Route path="/user/edit">
              <EditProfile />
            </Route>
            <Route path="/">
              <Redirect to="/all" />
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </UserContextProvider>
  );
}

export default App;
