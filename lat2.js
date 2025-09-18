const {error}=require('console');
const fs = require('fs');
try{
    fs.writeFileSync('data/test.txt','Hello Shync')
} catch(e){
    console.log(e);
}
fs.writeFile('data/TextDecoderStream.txt', 'Hello Asynchronous', (err)=> {
    console.log(err);
})

const data=fs.readFileSync('data/test.txt');
console.log(data.toString());
const
data1=fs.readFileSync('data/test.txt', 'utf-8');
console.log(data1);