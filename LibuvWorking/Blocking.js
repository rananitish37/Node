const crypto = require("crypto")

console.log("Hello world")

var a=9876567;
var b = 45678;


//pbkd2 - Password Base Key Derivative Function
//Synchronous Function - Will block the main thread ( don't use it in production)
crypto.pbkdf2Sync("password","salt",5000000,50, "sha512");
console.log("First Key is Generated")

//Synchronous Function - Will block the main thread ( don't use it in production)
crypto.pbkdf2("password","salt",500000,50, "sha512",(err,key)=>{
    console.log("Second Key is Generated")
});


function multiply(x,y){
    const result = x*y;
    return result;
}

const res = multiply(a,b);
console.log("Multiplication is: ",res)

/** OUTPUT
            Hello world
            First Key is Generated
            Multiplication is:  451141827426
            Second Key is Generated
 */