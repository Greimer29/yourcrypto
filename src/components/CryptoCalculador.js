import React, { Component } from "react";
import "./css/calculador.css";
import logo from "../images/usuario.jpg";
import usd from "../images/usd.png";
import converter from "../images/converter.png";

class CryptoCalculador extends Component {
  constructor(){
    super();
    this.state = {
      data:{
        quote:{
          USD:{
            price:""
          }
        }
      },
      value: 1,
      price: ""
    }
  }

  componentDidMount(){
    let apiKey = "ec710db3-a965-4b01-8445-c7ce2dc3c0b3";
    let qString = "?CMC_PRO_API_KEY=" + apiKey + "&symbol=BTC";
    let url2 = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest";

    this.fetchCryptoQuotes(url2,qString);
  }

  fetchCryptoQuotes = async (url,qString) => {
      try{
          const resp = await fetch(url+qString);
          const {data} = await resp.json();
          console.log(data)
          console.log(this.state)
          this.setState({
              data: data.BTC
          })
          console.log(this.state)
          // console.log(this.state)
          // fetch(url+qString)
          //     .then(resp => resp.json())
          //     .then(data => {
          //         this.setState({
          //             cryptoQuotes: data.data
          //         })
          //         console.log(this.state)
          //     })
          //     .catch(err => {
          //         this.setState({
          //             loading:false,
          //             error: err
          //         })
          //     })
      }catch(error){
          this.setState({
              loading:false,
              error
          })
      }
  }


  handleChange=(e)=>{
  }

  render() {
    return (
      <div className="container calculador-container rounded text-white d-flex mt-5">
        <div className="container data-container d-flex">
          <img className="loguito" src={this.props.cryptoInfo.logo} alt="CoinLogo" />
          <div className="container">
            {this.props.cryptoInfo.symbol}
            <p>{this.props.cryptoInfo.name}</p>
          </div>
          <div className="container valor-container">
            <input className="input-value" type="text" name="value" defaultValue={this.state.value} />
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
            <input className="input-price" type="text" name="price" defaultValue={this.props.quotes.quote.USD.price}/>
          </div>
        </div>
      </div>
    );
  }
}

export default CryptoCalculador;
