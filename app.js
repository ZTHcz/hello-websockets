//npm install --save express http url ws
const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const app = express();
app.use(express.static('public'));

const server = http.createServer(app);
const wss = new WebSocket.Server({server:server});
wss.on('connection', function(ws,request){
    console.long('connected!');
});

server.listen(8080,function(){
    console.log('app listening on port 8080');
});