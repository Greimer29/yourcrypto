import React from "react";

function CryptoInfo(props){
    const [nose,setNose] = React.useState("");
    return(
        
        <div className="container d-flex">
            <div className="container d-flex">
                <div className="container">
                    <img src={props.cryptoInfo.logo} alt=""/>
                    <span>{props.cryptoInfo.rank}</span>
                </div>
                <div className="container">
                    <h5>{props.cryptoInfo.name}</h5>
                    <h1>{props.cryptoInfo.symbol}</h1>
                </div>
            </div>
            <div className="container">
                {/* <h1>{props.cryptoInfo}</h1> */}
            </div>
        </div>
    )
}

export default CryptoInfo;