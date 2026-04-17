const fs = require('fs')

//Synchronous creation
// fs.writeFileSync("home.txt","This is a file created using sync write")

//Async
// fs.writeFile("homeAsync.txt","This is using asynchronous call of write",(err)=>{})

// const result = fs.readFileSync("./contact.txt","utf-8");   // this read is synchronous and it return the data
// console.log(result);

// fs.readFile("./Contact.txt","utf-8", (err, result)=>{ //this read is asynchronous and it doesn't return anything
//     if(err){
//         console.log("Error",err);
//     }else{
//         console.log(result)
//     }
// })

// fs.appendFileSync("home.txt", new Date().getDate().toLocaleString())

// fs.appendFileSync("log.txt", `${Date.now()} Hey There\n`)

fs.cpSync("./log.txt","./copy.txt")