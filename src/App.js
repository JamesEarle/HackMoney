import React from 'react';
import { useState } from 'react'

import './css/App.css'
import './css/index.css';
import './css/bootstrap.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Container from './components/Container'
import SampleContract from './components/SampleContract'

// import Web3 from 'web3';

const App = () => {
  const [account, setAccount] = useState("");
  const [assets, setAssets] = useState([]);
  const [name, setName] = useState("John Doe")
  
  const connectWallet = async () => {
    const address = await window.ethereum.request({ method: 'eth_requestAccounts' }); 
    setAccount(address);

    const request = `https://api.opensea.io/api/v1/assets?owner=${address}`;
    const response = await fetch(request);

    const myJson = await response.json();
    console.log(myJson)
    setAssets(myJson.assets);
  }
  // SampleContract is a promise object when it's async

  return (
    <div>
      <SampleContract
        name={name}
        setName={setName} />
      <Navbar 
        connect={connectWallet}
        account={account} />
      <Header/>
      <Container 
        account={account}
        assets={assets} />
    </div>
  );
}

export default App;
