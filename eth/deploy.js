const assert =require('assert');
const hdwalletprovider=require('@truffle/hdwallet-provider');
const Web3=require('web3');

const compiledfactory= require('./build/factory.json');
const provider=new hdwalletprovider('bonus save peace voyage young wink place story around sick finish wine'
,'https://rinkeby.infura.io/v3/d6ee36fd757d49268f3a09d0b6ba3332');


const web3= new Web3(provider);
const deploy=async()=>{
const accounts=await web3.eth.getAccounts();
inbox=await new web3.eth.Contract(JSON.parse(compiledfactory.interface))
   .deploy({data :compiledfactory.bytecode})
   .send({from:accounts[0],gas:'1000000'});
console.log(inbox.options.address);
};
deploy();
console.log("congoooooooooooo");



