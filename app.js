//node core modules
const http =require('http');

//express modules
const express=require('express');

const app=express();
app.use((req,res,next)=>{
	console.log("In the middleware");
	next();
})
app.use((req,res,next)=>{
	console.log("In the another middleware");
	res.send('<h1>Hello From Express!</h1>');
})


const server=http.createServer(app);
server.listen(3000);
