import React from "react";
import "./App.css";
import Home from "./pages/home";
import Rooms from "./pages/rooms";
import SingleRoom from "./pages/singleRoom";
import Error from "./pages/error";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/rooms">
          <Rooms></Rooms>
        </Route>
        <Route exact path="/rooms/:slug">
          <SingleRoom></SingleRoom>
        </Route>
        <Route>
          <Error></Error>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
