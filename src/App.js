import React from "react";
import "./App.css";
import Home from "./pages/home";
import Rooms from "./pages/rooms";
import SingleRoom from "./pages/singleRoom";
import Error from "./pages/error";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

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
        <Route exact path="/rooms/:slug" component={SingleRoom}></Route>
        <Route>
          <Error></Error>
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
