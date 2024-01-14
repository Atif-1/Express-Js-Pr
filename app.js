//node core modules
const http =require('http');

//express modules
const express=require('express');
const app=express();

const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

const adminRoutes=require('./routes/admin.js');
const shopRoutes=require('./routes/shop.js');
app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);

app.use((req,res,next)=>{
	res.status(404).send('<h1>Page Not Found</h1>');
})
app.listen(3000);

