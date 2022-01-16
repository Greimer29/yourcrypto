import React, {Component} from "react";
import CryptoCalculador from "../components/CryptoCalculador";
import Fallo from "../components/Fallo";

class CryptoCurrencies extends Component{
    constructor(){
        super();
        this.state = {
            data: {},
            loading: true,
            error: false
        }
    }

    componentDidMount(){
        // this.fetchCrypto();
    }

    fetchCrypto = (url,qRstring) =>{
        try {
            fetch(url,qRstring)
                .then(data => data.json)
                .then(data => {
                    this.setState({
                        data,
                        loading:false,
                        error:false
                    })
                })
                .catch(err =>{
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
                <div className="container d-flex">
                    <div className="container d-flex">
                        <div className="container">
                            <img src="" alt=""/>
                            <span></span>
                        </div>
                        <div className="container">
                            <h5>aja</h5>
                            <h1>aja</h1>
                        </div>
                    </div>
                    <div className="container">
                        <h1>AJAAA</h1>
                    </div>
                </div>
                <hr/>
                <CryptoCalculador data={this.state.data}/>
            </React.Fragment>
        )
    }
}

export default CryptoCurrencies;