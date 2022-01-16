import React, { Component } from "react";
import "../App.css";
import Cryptos from "./Cryptos";
// import Fallo from "./Fallo";

class CryptoList extends Component {
  render() {
    return (
      <div className="container list-container py-2">
        <table className="me-3 ms-3">
          <th>Num</th>
          <th>Name</th>
          <th>Price</th>
          <th>Actions</th>
        </table>
        {this.props.cryptoList.map((crypto) => {
          return (
            <Cryptos
              key={crypto.id}
              rank={crypto.cmc_rank}
              nombre={crypto.name}
              apellido={crypto.symbol}
              biyuyos={`$${crypto.quote.USD.price.toFixed(2)}`}
            />
          );
        })}
      </div>
    );
  }
}

export default CryptoList;
