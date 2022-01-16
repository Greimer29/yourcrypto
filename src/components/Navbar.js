import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-brand px-3 m-0 bg-dark text-white text-center bb-2">
        <Link className="btn brand text-white" to="/">
          YourCrypto
        </Link>
        <div className="text-center">
          <h4>Welcome to YourCrypto</h4>
          <p className="size-2">
            Your favorite site for find your favorite cryptocurrencies
          </p>
        </div>
        <div className="opciones btn btn-success">
          <span>. . .</span>
        </div>
      </div>
    );
  }
}

export default Navbar;
