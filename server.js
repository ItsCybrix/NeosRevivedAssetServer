const express = require('express')
const path = require('path');

const assets = express()

assets.use((req, res, next)=>{
    console.log(req.url);
    next()
})


/*
* Static Assets
*/

assets.get('/assets/23e7ad7cb0a5a4cf75e07c9e0848b1eb06bba15e8fa9b8cb0579fc823c532927', (req, res) => {
  res.sendFile(path.join(__dirname, 'static_assets', 'Aero.ttf'));
});


assets.listen(7777,()=>{
    console.log("Asset service running...")
})