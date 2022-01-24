import React from "react";

function CryptoInfo(props){
    return(
        
        <div className="container d-flex">
            {console.log(props.cryptoInfo)}
            <div className="container d-flex">
                <div className="container">
                    <img src={props.cryptoInfo} alt=""/>
                    <span></span>
                </div>
                <div className="container">
                    <h5>{props.cryptoInfo}</h5>
                    <h1>{props.cryptoInfo}</h1>
                </div>
            </div>
            <div className="container">
                <h1>{props.cryptoInfo}</h1>
            </div>
        </div>
    )
}

export default CryptoInfo;