import React, { Component } from "react";
import "./css/cryptos.scss";

class Cryptos extends Component {
  render() {
    return (
      <div className="cryptos rounded">
        <div className="ms-2"># {this.props.rank}</div>
        <div className="cryptos_logo ms-3 me-3">Logo</div>
        <div className="cryptos_name ms-3 me-3">
          <div>{this.props.nombre}</div>
          <div>{this.props.apellido}</div>
        </div>
        <div className="cryptos_biyuyos ms-3 me-3">{this.props.biyuyos}</div>
        <span className="cryptos_op">span add</span>
      </div>
    );
  }
}

export default Cryptos;
