const express= require("express");
const cors=require("cors");
const mongoose= require("mongoose");

const app=express();
require("dotenv").config();

// Route to handle the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Chat App!');
  });

  
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("DB connection successfull");
}).catch((err)=>
{
    console.log(err.message);
});

const server = app.listen(process.env.PORT, ()=>
{
    console.log(`Server started at Port ${process.env.PORT}`);
});