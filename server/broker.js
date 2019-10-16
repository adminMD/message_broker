const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Client connection <<start>>');
    ws.on('message', (message) => {
        console.log(`Received message => ${message}`)
    });
    ws.send('ho!')
});
