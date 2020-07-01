require('dotenv').config();
const express=require('express');
const {connectToDB,insertOrders,register,login,ordersList}=require('./Database.js')
const cors=require('cors');
const app=express();


app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

( function(){
 connectToDB();
})();
app.get('/',(req,res)=>{
    res.send("welcome to home page");
});
app.post('/api/orders',(req,res)=>{
    insertOrders(req.body)
})
app.post('/api/register',async (req,res)=>{
 res.send(await register(req.body)) ;
})
app.get('/api/orderslist',async (req,res)=>{
    res.send(await ordersList());
})

app.post("/api/login",async (req,res)=>{
res.send(await login(req.body));
    });


app.listen(process.env.PORT,"0.0.0.0",()=>console.log(`web service running on port ${PORT}`));