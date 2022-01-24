import React, { Component } from "react";
import "./css/calculador.css";
import logo from "../images/usuario.jpg";
import usd from "../images/usd.png";
import converter from "../images/converter.png";

class CryptoCalculador extends Component {
  constructor(){
    super();
    this.state = {
      data: {},
      value: "",
      price: ""
    }
  }

  componentDidMount(){
    this.setState({
      data: this.props.crypto,
      // value:"1",
      // price
    })
    console.log(this.state.data)
  }

  handleInput=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
    switch (e.target.name) {
      case "value":
        let price = this.state.value * this.state.price;
        this.setState({
          price
        })
        break;
        case "price":
        let value = this.state.price/ this.props.crypto.quote.USD.price;
        this.setState({
          value
        })
        break;
    
      default: this.setState({
        price: this.props.crypto.quote.price,
        value:"1"
      })
        break;
    }
  }

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
            <input className="input-value" type="text" onChange={e=>{this.handleChange(e)}} />
          </div>
        </div>
        <img className="mx-2" src={converter} alt="" />
        <div className="container prices-container d-flex">
          <img className="loguito " src={usd} alt="CoinLogo" />
          <div className="container">
            USD
            <p>Dinero</p>
          </div>
          <div className="container valor-container">
            <input className="input-price"type="text" />
          </div>
        </div>
      </div>
    );
  }
}

export default CryptoCalculador;
