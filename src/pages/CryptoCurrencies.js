import React, {Component} from "react";
import CryptoCalculador from "../components/CryptoCalculador";
import Fallo from "../components/Fallo";
import CryptoInfo from "../components/CryptoInfo";
import Loader from "../components/Loader";

class CryptoCurrencies extends Component{
    constructor(){
        super();
        this.state = {
            cryproInfo:{
                BTC:{}
            },
            cryptoQuotes:{
                BTC:{
                    quote:{
                        USD:{
                            price:""
                        }
                    }
                }
            },
            loading: true,
            error: false
        }
        this.fetchCryptoInfo = this.fetchCryptoInfo.bind(this);
        this.fetchCryptoQuotes = this.fetchCryptoQuotes.bind(this);
    }

    componentDidMount(){
        let apiKey = "ec710db3-a965-4b01-8445-c7ce2dc3c0b3";
        let qString = "?CMC_PRO_API_KEY=" + apiKey + "&symbol=BTC";
        let url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/info";
        let url2 = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest";

        this.fetchCryptoInfo(url,qString);
        this.fetchCryptoQuotes(url2,qString);
    }

    fetchCryptoInfo = (url,qString) => {
        try {
            fetch(url + qString)
                .then(resp => resp.json())
                .then(data => {
                    this.setState({
                        cryproInfo:data.data,
                        loading:false,
                        error:null
                    })
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

    fetchCryptoQuotes = async (url,qString) => {
        try{
            const resp = await fetch(url+qString);
            const {data} = await resp.json();
            this.setState({
                cryptoQuotes: data,
            })
        }catch(error){
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
                {this.state.loading && (
                    <div className="loader">
                        <Loader />
                    </div>
                )}
                <CryptoInfo cryptoInfo={this.state.cryproInfo.BTC} quotes={this.state.cryptoQuotes.BTC}/>
                <hr/>
                <CryptoCalculador cryptoInfo={this.state.cryproInfo.BTC} quotes={this.state.cryptoQuotes.BTC}/>
            </React.Fragment>
        )
    }
}

export default CryptoCurrencies;