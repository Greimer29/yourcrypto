import React, { Component } from "react";
import "./css/calculador.css";
import logo from "../images/usuario.jpg";
import usd from "../images/usd.png";
import converter from "../images/converter.png";

class CryptoCalculador extends Component {
  render() {
    return (
      <div className="container calculador-container rounded text-white d-flex mt-5">
        <div className="container data-container d-flex">
          <img className="loguito" src={logo} alt="CoinLogo" />
          <div className="container">
            CoinName
            <p>ProyectName</p>
          </div>
          <div className="container valor-container">
            <input type="text" />
          </div>
        </div>
        <img className="" src={converter} alt="" />
        <div className="container prices-container d-flex">
          <img className="loguito " src={usd} alt="CoinLogo" />
          <div className="container">
            USD
            <p>Dinero</p>
          </div>
          <div className="container valor-container">
            <input type="text" />
          </div>
        </div>
      </div>
    );
  }
}

export default CryptoCalculador;
