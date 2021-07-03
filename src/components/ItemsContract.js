import Web3 from "web3";

// Path to ABI of Sample contract
import Items from '../artifacts/Items.json'

const ItemsContract = ({ count, setCount }) => {
  const web3 = new Web3(window.ethereum || "ws://localhost:8545");

  // Address on local Ganache after `truffle migrate --reset`
  const address = "0xfb033B9C3A780AbF000cB4738A6BED1Dd54e138e";
  const itemsInstance = new web3.eth.Contract(Items.abi, address, { gasPrice: "20000000000" });

  const addItem = async () => {
    const accounts = await web3.eth.getAccounts()

    if (accounts.length === 0) {
      throw new Error()
    }

    const account = accounts[0];
    
    // Get the function object and estimate the gas required to execute
    const addItemFunc = await itemsInstance.methods.addItem();
    const gas = await addItemFunc.estimateGas();

    const options = {
      from: account,
      gas: gas
    }
    
    // using `.send()` will manipulate contract state, while `.call` is view only
    await addItemFunc.send(options)
    .on("receipt", async _ => {
      // Second call to get value shouldn't be necessary
      // but "send" returns a receipt that has information
      // about the transaction itself not input or output
      const count = await addItemFunc.call()
      setCount(count);
    })
  }

  return (
    <>
      <button onClick={addItem}>Add Item</button>
      <br />
      <p>Current Item Count: {count}</p>
    </>
  )
}

export default ItemsContract;
