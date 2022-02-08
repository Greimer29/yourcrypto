import React from "react";

function CryptoInfo(props){
    return(
        <div className="container d-flex">
            <div className="container d-flex">
                <div className="container text-center">
                    <img src={props.cryptoInfo.logo} alt=""/><br/>
                    <span>#{props.quotes.cmc_rank}</span>
                </div>
                <div className="container">
                    <h5>{props.cryptoInfo.name}</h5>
                    <h1>{props.cryptoInfo.symbol}</h1>
                </div>
            </div>
            <div className="container">
                <h1>${props.quotes.quote.USD.price}</h1>
            </div>
        </div>
    )
}

export default CryptoInfo;