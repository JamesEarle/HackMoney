import Web3 from "web3";

// Path to ABI of Sample contract
import Sample from '../artifacts/Sample.json'

const SampleContract = ({name, setName}) => {
  const web3 = new Web3(window.ethereum || "ws://localhost:7545");
  const address = "0x1695a841DE2842c5998D3B212CB26DBb0EbE8571";
  const sampleInstance = new web3.eth.Contract(Sample.abi, address, { gasPrice: "20000000000"});
  
  const state = {
    name: ""
  }

  const getName = async () => {
    const currentContractName = await sampleInstance.methods.name().call()
    setName(currentContractName)
    console.log(currentContractName)
  }

  const contractSetName = async () => {
    console.log(state.name)
    const options = {
      from: "0x4b57C3cdD700fB6bCEf3b66358358d5a5118df40",
      gas: "50000"
    }
    const currentContractName = await sampleInstance.methods.setName(state.name).send(options)
    console.log(currentContractName)
    setName(state.name)
  }

  const handleInput = event => {
    state.name = event.target.value
    console.log(event.target.value)
  }

  return(
    <>
      <button onClick={getName}>GetName</button>
      <br/>
      <input onChange={handleInput} placeholder="Set name"/>
      <button onClick={contractSetName}>SetName</button>
      <p>Name: {name}</p>
    </>
  )
}

export default SampleContract;
