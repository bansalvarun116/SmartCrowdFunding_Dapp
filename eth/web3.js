import Web3 from 'web3';
let web3;
if(typeof window!== 'undefined' && typeof window.web3 !== 'undefined')
{
    // in browser and metamask installed 
 web3 = new Web3(window.web3.currentProvider);
}
else{
   const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/d6ee36fd757d49268f3a09d0b6ba3332');
   web3 = new Web3(provider)
}
export default web3;