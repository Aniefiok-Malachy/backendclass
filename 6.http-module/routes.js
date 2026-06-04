const http = require('http');

const server = http.createServer((req, res)=>{
    const url = req.url;
    if(url==='/'){
        res.writeHead(200,{
            "content-Type":"text/plain"
        })
        res.write("Home Page");
    }
    else if (url === "about"){
        res.writeHead(200,{
            "content-Type":"text/plain"
        })
        res.write("About Page");
    }
    else{
        res.writeHead(404,{
            "content-Type":"text/plain"
        })
        res.write("Page Not Found");
    }
    res.end();
})

const port = 3000;
server.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})