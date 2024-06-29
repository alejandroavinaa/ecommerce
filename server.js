const express = require('express');
const server = express();
const port = 3000;

server.get('/',(req,res)=>{
    res.send('Hello MR NALGAS')
});

server.listen(port,()=>{
    console.log(`Example server listening ${port}`)

});