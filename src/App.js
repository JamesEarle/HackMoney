import React from 'react';
import { useState } from 'react'

import './css/App.css'
import './css/index.css';
import './css/bootstrap.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Container from './components/Container'

// import Web3 from 'web3';

const App = () => {
  const [account, setAccount] = useState("");
  const [assets, setAssets] = useState([]);
  
  const connectWallet = async () => {
    const address = await window.ethereum.request({ method: 'eth_requestAccounts' }); 
    setAccount(address);

    const request = `https://api.opensea.io/api/v1/assets?owner=${account}`;
    const response = await fetch(request);

    const myJson = await response.json();
    // console.log(myJson.assets)
    setAssets(myJson.assets);
  }

  return (
    <div>
      <Navbar 
        connect={connectWallet}
        account={account}/>
      <Header/>
      <Container 
        account={account}
        assets={assets} />
    </div>
  );
}

export default App;
