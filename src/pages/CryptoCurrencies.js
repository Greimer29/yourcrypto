import React, {Component} from "react";
import CryptoCalculador from "../components/CryptoCalculador";
import Fallo from "../components/Fallo";
import CryptoInfo from "../components/CryptoInfo";

class CryptoCurrencies extends Component{
    constructor(){
        super();
        this.state = {
            data:{
                BTC:{
                }
            },
            loading: true,
            error: false
        }
    }

    componentDidMount(){
        let apiKey = "ec710db3-a965-4b01-8445-c7ce2dc3c0b3";
        let qString = "?CMC_PRO_API_KEY=" + apiKey + "&symbol=BTC";
        let url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/info"

        this.fetchCrypto(url,qString);
    }

    fetchCrypto = (url,qString) => {
        try {
            fetch(url + qString)
                .then(resp => resp.json())
                .then(data => {
                    this.setState({
                        data:data.data,
                        loading:false,
                        error:null
                    })
                    console.log(this.state.data)
                })
                .catch(err => {
                    this.setState({
                        loading:false,
                        error:err
                    })
                })
        } catch (error) {
            this.setState({
                loading:false,
                error
            })
        }
        
    } 

    render(){
        if(this.state.error){
            return <Fallo error={this.state.error.message}/>
        }
        
        return(
            <React.Fragment>
                <CryptoInfo cryptoInfo={this.state.data.BTC}/>
                <hr/>
                <CryptoCalculador crypto={this.state.data.BTC}/>
            </React.Fragment>
        )
    }
}

export default CryptoCurrencies;