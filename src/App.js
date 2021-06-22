import React, { Component } from 'react';
import Web3 from 'web3';
import './css/App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { account: '' };
    // this.ethereum = undefined;
  }

  componentWillMount() {
    this.loadData()
  }

  loadData = async () => {
    if (window.ethereum) {
      this.setState({ web3: window.ethereum });
      this.ethereum = window.ethereum; // this.ethereum undefined below? need this?
      console.log("Connected through MetaMask");
    } else {
      console.log("Please install MetaMask");
      // Use local development blockchain
      var web3Provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545");
      this.setState({ web3: web3Provider })
      this.ethereum = web3Provider;
    }
  }

  connectWallet = async () => {
    console.log(window.ethereum)
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    this.setState({ account: window.ethereum.selectedAddress });
  }

  render() {
    return (
      <div className="container">
        <h1>Hello, World!</h1>
        <p>Your account: {this.state.account}</p>
        <button onClick={this.connectWallet}>Connect</button>
      </div>
    );
  }
}

export default App;
