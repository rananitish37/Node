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



# How node js works
So when a client made any request it goes to event queue and it get served one by one picked based on the arrival like who arrive first will get the chance to executed first.

And there is a event loop which always keep checking the event queue and once get any job.
1st it will check whether it is a blocking or non blocking request if it is non blocking(Asynchronous) request then it get executed as soon as they get there chance but if it is a blocking(Synchronous) request then it get into thread pool and till that time no other request will be executed as when it get into thread pool all the threads get assigned to this task to complete first then all the other remaining request will get the chance to be executed.
Image one showing how request get executed of it is non-blocking [[img1.png]]
and if it is blocking then [[img2.png]]
final: [[img3.png]]


# SDLC (Waterfall):
SDLC- Software Development Life Cycle

**Waterfall Model**
**(SOLC)**

Requirements → PM + Designers
	→ Design → Senior Engineer /EM
		Development → SDE1 SDE2
			 Testing → SDET
				→ Deployment → Dev
					→ Maintenance

So very simple strategy we already know how production works from taking a project to delivering them to the client

1. Requirement gathering : in this the main hero is project manager or EM who gathers all the requirements for the required development also they decide the tech stack we should use in this particular project.
2. Design: There are some senior engineer who decides the actual designing of the project with the help of EM.
3. Development : Then comes the main development part where actual development happened and done by the developer of the team in some of the company(better say start-ups) of may be 10 people these fields becomes different for them as developer only does the various task of designing developing and testing of the project.
4. Testing: Now comes the testing part where we check the development whether the requirement given by the client is working properly or not which is developed by the developer.
5. Deployment: Then comes the deployment part where devOps comes into picture who is responsible for deploying the project. In startups that is also done by developer sometimes.
6. Maintenance: Then comes maintenance part where if any kind of requirement. comes or any change request is there then the whole cycle will be repeated.