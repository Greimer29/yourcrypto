import React, { Component } from "react";
// import {BrowserRouter, Switch, Route} from 'react-router-dom';
import "../App.css";

import CryptoList from "../components/CryptoList";
import CryptoSearch from "../components/CryptoSearch";
import Loader from "../components/Loader";
// import Navbar from "../components/Navbar";
import Fallo from "../components/Fallo";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      cryptoList: [],
      error: null,
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchCryptoList();
  }

  fetchCryptoList = async () => {
    this.setState({
      loading: true,
      error: null,
    });

    try {
      let apiKey = "ec710db3-a965-4b01-8445-c7ce2dc3c0b3";
      let url =
          "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
        qString = "?CMC_PRO_API_KEY=" + apiKey + "&start=1&limit=5&convert=USD";

      const resp = await fetch(url + qString);
      const { data } = await resp.json();

      this.setState({
        loading: false,
        cryptoList: data,
      });
      console.log(this.state.cryptoList);
    } catch (error) {
      this.setState({
        loading: false,
        error,
      });
    }
  };

  render() {
    if (this.state.error) {
      return <Fallo error={this.state.error.message} />;
    }

    return (
      <div className="App">
        {/* <Navbar /> */}
        <CryptoSearch cryptoList={this.state.cryptoList} />
        <CryptoList cryptoList={this.state.cryptoList} />
        {this.state.loading && (
          <div className="loader">
            <Loader />
          </div>
        )}
      </div>
    );
  }
}

export default Home;
