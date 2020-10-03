const assert=require('assert');
const ganache =require('ganache-cli');
const Web3= require('web3');
const web3= new Web3(ganache.provider());

const compiledfactory=require('../eth/build/factory.json');
const compiledcrowdfund=require('../eth/build/crowdfund.json');
let account;
let factory;
let crowdfund_address;
let crowdfund;

beforeEach( async ()=>{
    account = await web3.eth.getAccounts();

    factory= await new web3.eth.Contract(JSON.parse(compiledfactory.interface))
    .deploy({data:compiledfactory.bytecode})
    .send({from:account[0], gas:'1000000'});
     
    await factory.methods.create_campaigns('100').send({from:account[0], gas:'1000000'});
    
   [crowdfund_address]= await factory.methods.get_deployed_campaigns().call();
    
  
    
    crowdfund= await new web3.eth.Contract(JSON.parse(compiledcrowdfund.interface),crowdfund_address);

});

describe('campaigns', ()=>{
  
    it('contracts deployed',()=>{
       assert.ok(factory.options.address);
        assert.ok(crowdfund.options.address);

    });
    

    


});