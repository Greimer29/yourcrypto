import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/YourCrypto-logo.jpeg";
import "./css/pages.css";

class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="aja container py-5 bg-dark">
          <div className="row py-5 d-flex justify-content-center align-items-center">
            <img
              className="col-md-5 rounded-circle logo"
              src={logo}
              alt="Logo"
            />
            <h1 className="col-md-6 display-1">YourCrypto</h1>
          </div>
          <div className="container py-3 col-4 d-flex justify-content-between align-items-center">
            <Link className="btn btn-warning" to="/register">
              Singup
            </Link>
            <Link className="btn btn-warning px-3" to="/login">
              Login
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Landing;
