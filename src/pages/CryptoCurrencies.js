import React, {Component} from "react";
import CryptoCalculador from "../components/CryptoCalculador";
import Fallo from "../components/Fallo";
import CryptoInfo from "../components/CryptoInfo";

class CryptoCurrencies extends Component{
    constructor(){
        super();
        this.state = {
            data:{},
            loading: true,
            error: false
        }
    }

    componentDidMount(){
        let apiKey = "ec710db3-a965-4b01-8445-c7ce2dc3c0b3";
        let qString = "?CMC_PRO_API_KEY=" + apiKey + "&id=1";
        let url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/info"

        this.fetchCrypto(url,qString);
    }

    fetchCrypto = async (url,qString) =>{
        try {
            const resp = await fetch(url + qString);
            const {data} = await resp.json();
            
            this.setState({
                data,
                error:false,
                loading:false
            })
            console.log(this.state.data[1].name)
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
                {console.log(this.state)}
                <CryptoInfo cryptoInfo={this.state.data[1]}/>
                <hr/>
                <CryptoCalculador crypto={this.state.data[1]}/>
            </React.Fragment>
        )
    }
}

export default CryptoCurrencies;