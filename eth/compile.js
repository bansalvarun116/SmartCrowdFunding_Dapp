const path = require('path');
const solc= require('solc');

const fs= require('fs-extra');

const buildpath=path.resolve(__dirname,'build');
fs.removeSync(buildpath);


const contract_path=path.resolve(__dirname,'contract','contract1.sol');

const source=fs.readFileSync(contract_path,'utf8');
console.log('here1');
const output=solc.compile(source,1).contracts; 

fs.ensureDirSync(buildpath);

for(let contract in output){
    fs.outputJSONSync(
        path.resolve(buildpath,contract.replace(':','')+ '.json'),
        output[contract]
    );
}