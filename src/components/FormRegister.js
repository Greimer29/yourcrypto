import React, { Component } from "react";
import "./css/form.css";

class Register extends Component {
  render() {
    return (
      <React.Fragment>
        <h4 className="mt-5 text-center">Register YourCrypto acount</h4>
        <div className="container col-5 py-3">
          <form action="/home" className="form rounded">
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input type="email" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Nombre de Usuario</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Contrasena</label>
              <input type="password" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Confirmar Contrasena</label>
              <input type="password" className="form-control" />
            </div>
            <div className="container text-center">
              <button className="btn btn-success">Enviar</button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
