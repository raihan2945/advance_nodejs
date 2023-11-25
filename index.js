const express = require('express')
const app = express();

app.get('/', (req,res, next)=>{
    res.send("Hello express")
})

app.listen(3030,()=>{
    console.log("app is running on port : 3030")
})