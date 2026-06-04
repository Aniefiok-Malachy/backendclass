const {createServer} = require('http');
const { stringify } = require('querystring');
const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res)=>{
    res.statusCode= 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("This is my first App");
});

server.listen(port, hostname,()=>{
    console.log('Server is running at http:// ${hostname}:${port}')
})

const body = {
    title:'foo',
    body:'bar',
    userId: 1
}

async function main(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    headers:{
        'User-Agent':'undici-stream-example',
        'Content-Type': 'application/json'
    }, 

    body:JSON.stringify(body)
    })
    const data = await response.json();
    console.log(data);

}

main().catch(console.error);

const array = ['John', 200, 'Marks'];
console.log(array, ':array');

setTimeout(()=>{
    console.log('This message is delay by 5 secs')
}, 5000)

console.log('This is the last message...')


const firstmodule = require('./first_module');
console.log(firstmodule.add(10,30))
console.log(firstmodule.subtract(30,10))
console.log(firstmodule.divide(10,0))


try{
    console.log('Trying to divide by zero')
    let result = firstmodule.divide(10,10)
    console.log(result)
}
catch(error){
    console.log('Caught an error:', error.message)
}
