import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/login.css";

class Login extends Component {
  render() {
    return (
      <div className="container text-center mt-5">
        <h2 className="">Login whit YourCrypto acount</h2>
        <div className="login pt-3">
          <div className="login-container">
            <div className="imagen"></div>
            <h4>Usuario</h4>
            <div className="usuario">
              <input type="text" id="usuario-caja" />
            </div>
            <h4>Contraseña</h4>
            <div class="contraseña">
              <input type="password" id="contraseña-caja" />
            </div>
            <Link className="btn btn-success px-3 mt-3" to="/home">
              Enter
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
