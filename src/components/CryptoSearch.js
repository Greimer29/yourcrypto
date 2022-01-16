import React from "react";
import "./css/search.css";
import Cryptos from "./Cryptos";

function CryptoSearch(props) {
  const [query, setQuery] = React.useState("");
  const [isOpen, setOpen] = React.useState(false);

  const filteredCryptos = props.cryptoList.filter((crypto) => {
    return crypto.symbol.includes(query.toUpperCase());
  });

  return (
    <div className="container">
      <main className="main  text-center">
        <div className="principal-buscador">
          <div className="principal-buscador-contenedor">
            {/* <div className="microfono"></div> */}
            <input
              type="text"
              className="text-white"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              onFocus={(e) => {
                console.log(filteredCryptos);
                console.log(e.target.value);
                setOpen(true);
              }}
              onBlur={(e) => {
                console.log(filteredCryptos);
                console.log(e.target.value);
                if (e.target.value === "") {
                  setOpen(false);
                }
              }}
            />
            <span className="buscador text-white"></span>
          </div>
        </div>
      </main>

      {isOpen && (
        <div className="search-list fadeIn">
          {filteredCryptos.map((crypto) => {
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
      )}
    </div>
  );
}

export default CryptoSearch;
