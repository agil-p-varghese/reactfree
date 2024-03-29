import React,{ Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component{
    render(){
      return(
      <React.Fragment>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-style ">
    <div className="container-fluid">
      <a className="navbar-brand" href="/#">E commerce</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
          <li className="nav-item">
          <Link className="nav-link" to="/">Login</Link>
          <Link className="nav-link" to="/dashboard">Dashboard</Link>
          <Link className="nav-link" to="/customerslist">customerslist</Link>
          <Link className="nav-link" to="/cart">cart</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</React.Fragment>);

    }
}
export default NavBar;