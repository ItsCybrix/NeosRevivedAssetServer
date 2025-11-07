const express = require('express')


const api = express()

api.use((req, res, next)=>{
    console.log(req.url);
    res.send("OK")
})


api.listen(7777,()=>{
    console.log("Asset service running...")
})