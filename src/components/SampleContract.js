import Web3 from "web3";
import { useAsync } from "react-async"

// Path to ABI of Sample contract
import Sample from '../artifacts/Sample.json'

const SampleContract = ({name, setName}) => {
  // then / finally syntax works with react better than async / await ?
  const web3 = new Web3(window.ethereum);
  window.ethereum.enable(); 
  const address = "0x10D7322D075099F2C6392E72AdcaAec57575513f";
  const sampleInstance = new web3.eth.Contract(Sample.abi, address);
  const myPromise = sampleInstance.methods.name().call();
  myPromise.then(value => setName(value))

  // console.log("call setname");
  // const sampleName = await sampleInstance.methods.name().call();
  // await sampleName.finally(retval => setName(retval));
  // console.log(sampleName);
  // setName(sampleName);
  // return sampleName;
  return(
    <p>Name: {name}</p>
  )
}

// const SampleContractSync = ({ name, setName }) => {
//   let newName = "0xasd";
//   let retval = useAsync({ promiseFn: SampleContract, newName, setName});
//   console.log(retval)
//   return (
//     <p>Name: {name}</p>
//   )
// }

export default SampleContract;


/*
var fs = require('fs');
var jsonFile = "pathToYourJSONFile/project.json";
var parsed= JSON.parse(fs.readFileSync(jsonFile));
var abi = parsed.abi;

*/