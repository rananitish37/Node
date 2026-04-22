const http = require("http")
const fs = require("fs")

const myServer = http.createServer((req, res) =>{
    const log = `${Date.now()}: ${req.url} New requirest received\n`;
    fs.appendFile("log.txt",log, (err, result)=>{
        res.end("Hello we are server")
    })
})

myServer.listen(8004, ()=>{
    console.log("Server started!")
})