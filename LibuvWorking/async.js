const fs = require("fs")
const https = require("https")

console.log("Hello world")

var a=9876567;
var b = 45678;

https.get("https://dummyjson.com/product/1",(res)=>{
    console.log("fetched data successfully")
})

setTimeout(()=>{
    console.log("Running after 5 seconds")
},5000)

fs.readFile("./file.txt","utf-8",(err, data)=>{
    console.log("File data: ", data)
})

function multiply(x,y){
    const result = x*y;
    return result;
}

const res = multiply(a,b);
console.log("Multiplication is: ",res)



/**
 * OUTPUT: 
        Hello world
        Multiplication is:  451141827426
        File data:  This is the data from file read
        fetched data successfully
        Running after 5 seconds
 * 
 */