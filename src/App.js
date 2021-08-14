import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import CryptoCard from './components/CryptoCard';
import ApiCrypto from './api/api.js'
import CryptoList from "./components/CryptoList";


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
      <>
        <div className="App">
          <h1>Oi</h1>
        </div>

      <Switch>
          <Route path="/market-crypto" render={(props) => <CryptoList {...props} cryptos={this.state.cryptoList}/>}/>
      </Switch>

      </>
    );
  }
}

export default App;
