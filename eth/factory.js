import web3 from './web3';
import factory from './build/factory.json'

const instance = new web3.eth.Contract(JSON.parse(factory.interface),'0xc13098af4F3F254a742A5234dcEdA850A4BB952A');

export default instance;