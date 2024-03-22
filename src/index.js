import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap";
import "popper.js/dist/umd/popper";
//import NavBar from "./App";
import App from "./App";
import "./index.css";

var element=<button class="btn btn-danger">hello world</button>; 
ReactDOM.render(<App/>, document.getElementById("root"));
 
