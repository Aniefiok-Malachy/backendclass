const fs = require('fs');
function greeting(name, callbackFn){
    console.log(`Hello ${name}`);
    callbackFn();
}

function adddress(){
    console.log('Malachy is from Essien Udim');
}

greeting("Malachy", adddress);

fs.readFile('input.txt', 'utf-8', (err, data)=>{
    if(err) throw err;
    console.log(data);
});

function greet(name){
    console.log(`Hello ${name}`);
}

function profilename(callback){
    const username = "John";
    callback(username);
}

profilename(greet)

