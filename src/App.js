import React from "react";
import "./App.css";
import Home from "./pages/home";
import Rooms from "./pages/rooms";
import SingleRoom from "./pages/singleRoom";
import Error from "./pages/error";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route exact path="/rooms">
        <Rooms></Rooms>
      </Route>
      <Route exact path="/single-room">
        <SingleRoom></SingleRoom>
      </Route>
    </div>
  );
}

export default App;
