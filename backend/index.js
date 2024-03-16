const express=require('express');
const cors=require('cors')
const dotenv=require('dotenv')
const {connection}=require("./db");
const {productRouter}=require("./routes/product.route")
const {userRouter}=require("./routes/user.route")


const app=express();
dotenv.config({path: "./config.env"});

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST"],
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/api/products', productRouter)
app.use('/user', userRouter)

connection();

app.listen(process.env.PORT, ()=>{
   
    console.log(`server running at port ${process.env.PORT} `)
})