const express = require('express');
const app = express();

const PORT = 8000;

app.get("/",(req,res)=>{
    res.send("Hello,Greetings!");
});

app.listen(PORT,()=>{
    console.log(`App is Running On PORT ${PORT}`);
});

