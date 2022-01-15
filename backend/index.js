const express = require('express');
const app = express();

require('dotenv').config();

// database connection

require('./config/database');

app.get('/', (req,res)=>{
    res.send("API Dashboard");
})


app.listen(process.env.PORT, ()=>{
    console.log("Server listening on port " + process.env.PORT);
})