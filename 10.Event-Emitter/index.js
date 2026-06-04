const EventEmitter = require('events');
const emitter = new EventEmitter();

//Using Function 
function greeting(name, age){
    console.log(`${name} is ${age} years old..!`)
}

emitter.on("greeting", greeting);
emitter.emit("greeting", 'Malachy', 28);

emitter.on('welcome', (name, workplace)=>{
    console.log(`Miss ${name}, a worker at ${workplace} came to my place today. wow `)
})

emitter.emit('welcome', 'Faith Ukoh', 'Nicegram');