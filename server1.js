var express = require('express')
var app = express();
var port = 4000

app.get('/',(req,res)=>{
 res.send("Welcome to training");
})

app.listen(port);
console.log('Server running at http://localhost:' + port)
