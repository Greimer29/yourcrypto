import React, { Component } from "react";
import ImgError from "../images/404_GIF.gif";
import "./css/fallo.css";

class Fallo extends Component {
  render() {
    return (
      <div className="text-white">
        <div className="row-2 text-center">
          <img className="error" src={ImgError} alt="ImgError" />
          <h1>Marico algo fallo</h1>
          {this.props.error}
          {console.log(this.props.error)}
        </div>
        <div className="col-6"></div>
      </div>
    );
  }
}

export default Fallo;
