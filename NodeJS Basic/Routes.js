const http = require("http")

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req , res) =>{
    res.statusCode = 200;
    res.setHeader("Content-Type" , "Text/plain");
    if(req.url==="/")
    {
        res.end("This is Home page....");
    }

    else if(req.url==="/about")
    {
        res.end("This is About page");
    }
});

server.listen(port, hostname , ()=>
{
    console.log(`The server is running at http://${hostname}:${port}`)
})