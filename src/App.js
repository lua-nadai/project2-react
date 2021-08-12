import React, { Component } from "react";
import axios from 'axios';

import './App.css';

import CryptoCard from './components/CryptoCard';
import ApiCrypto from './api/api.js'


class App extends Component {

  state= {
    cryptoList: [],
  }

  componentDidMount() {
    ApiCrypto.listCoins('usd').then((result) => {
      this.setState({
        cryptoList: result.data
      })
    }) 
  }

  render(){
    return (
      <div className="App">
        <h1>Oi</h1>
      </div>
    );
  }
}

export default App;
