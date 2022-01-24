import React, { Component } from "react";
import "../App.css";
import Cryptos from "./Cryptos";
// import Fallo from "./Fallo";

class CryptoList extends Component {
  render() {
    return (
      <div className="container list-container py-2">
        <div className="mx-2 d-flex">
          <h6 className="me-5 ">Num</h6>
          <h6 className="me-5 ms-4 ">Name</h6>
          <h6 className="me-5 ms-5 ">Price</h6>
          <h6 className="me-5 align-self-sm-end ">Actions</h6>
        </div>
        {this.props.cryptoList.map((crypto) => {
          return (
            <Cryptos
              key={crypto.id}
              rank={crypto.cmc_rank}
              nombre={crypto.name}
              apellido={crypto.symbol}
              biyuyos={`$${crypto.quote.USD.price.toFixed(2)}`}
              logo={crypto.logo}
            />
          );
        })}
      </div>
    );
  }
}

export default CryptoList;
