const http = require('http');

const server = http.createServer((req, res)=>{
    console.log('req', req);
    res.writeHead(200,{
        "Content-Type":"text/plain"
    });
    res.write('Hello, this is from Node.js');
    res.end();
})

const port = 3000;
server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})
