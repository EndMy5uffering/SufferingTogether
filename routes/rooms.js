const WebSocket = require("ws");

const wsServer = new WebSocket.Server({
    port: 25566
})

wsServer.on("connection", function(ws) {    // what should a websocket do on connection
    ws.on("message", function(msg) {        // what to do on message event
        wsServer.clients.forEach(function(client) {
            if (client.readyState === WebSocket.OPEN) {     // check if client is ready
              client.send(msg.toString());
              console.log(JSON.parse(msg)?.action || msg.toString())
            }
        })
    })
})