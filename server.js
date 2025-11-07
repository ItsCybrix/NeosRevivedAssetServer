const express = require('express')
const path = require('path');

const assets = express()




/*
* Static Assets
*/

assets.get('/assets/23e7ad7cb0a5a4cf75e07c9e0848b1eb06bba15e8fa9b8cb0579fc823c532927', (req, res) => {
  res.sendFile(path.join(__dirname, 'static_assets', 'NotoSansMath-Regular.ttf'));
});




assets.use((req, res, next)=>{
    console.log("UNKNOW ASSET! " + req.url);
    next()
})


assets.listen(7777,()=>{
    console.log("Asset service running...")
})