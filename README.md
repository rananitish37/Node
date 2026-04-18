# FS module

fs module is a file system module which is library module or we can say predefined module used to handle operations related to file like file creation, deletion, updation etc

to use fs module we need to require it first then we will be able to use all the functions or operations defined in it 

const fs = require('fs')

to create a file in current folder
we simply do like
`
//Synchronous creation
fs.writeFileSync("home.txt","This is a file created using sync write")

//Async
/fs.writeFile("homeAsync.txt","This is using asynchronous call of write",(err)=>{})`

So there are two ways to every operation in file system specially in creation, deletion and updation what we can


Similarly we have operation to update the content in file
`// fs.appendFileSync("home.txt", new Date().getDate().toLocaleString())

// fs.appendFileSync("log.txt", `${Date.now()} Hey There\n`)`

Also for read:
`
// this read is synchronous and it return the data
const result = fs.readFileSync("./contact.txt","utf-8"); 
console.log(result);

//this read is asynchronous and it doesn't return anything
fs.readFile("./Contact.txt","utf-8", (err, result)=>{ 
	if(err)
		console.log("Error",err);
	 }else{
		console.log(result)
	}
})`

Here while reading and writing there is sync and async function is used so there is first difference between sync and async is that in sync it returns the value 
but in async it will take a callback function to return result and error if any occurs


But there are a major difference is: [[How node js works]]


# Module in Node
Modules in node js is just js file which contains some operation which can be used in multiple place there can be some predefined modules in node like fs, os  ,etc 

**a module is a self-contained unit of reusable code, typically organized into single or multiple JavaScript files**


eg:
math.js
`
function add(a, b){
	return a+b;
}

function sub(a, b){
	return a-b;
}

//Another way to make a anonymous function and export it directly
exports.a = (a,b) => {
	return a*b;
}
module.exports={
	add,
	sub
}
`

to use it 
home.js
`
let math = require('./math')
console.log(math.add(3, 7))
console.log(math.sub(8, 4))