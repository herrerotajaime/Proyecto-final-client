import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import "bulma/css/bulma.css";
import Navbar from "./components/NavBar/Navbar";
import GoogleApiWrapper from "./App";


ReactDOM.render(
  <BrowserRouter>
    <div>
      <Navbar />
      <GoogleApiWrapper />
    </div>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
