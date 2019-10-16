const WebSocket = require('ws');
const connection = new WebSocket("ws://localhost:8080");

connection.on('open', _ => {
    console.log('Connection: <<open>>');
    connection.send('hey')
});

connection.on('error', error => {
    console.log('Connection <<error>>');
    console.log(`WebSocket error: ${error}`)
});

connection.on('message', message => {
    console.log(message.data)
});
