const express = require("express")
const fs = require("fs");
const WebSocket = require("ws");
const routerTest = require('./routes/routeTest')

const app = express()
const PORT = 666

const wsServer = new WebSocket.Server({
    port: 25566
}) 

app.use('/test', routerTest)

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

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get('/ws', (req, res) => {
    res.sendFile(__dirname + "/sockets.html");
})

app.get("/video", function (req, res) {

    const videoPath = "./videos/The Eminence in Shadow AMV.mp4";
    const videoSize = fs.statSync(videoPath).size;

    const range = req.headers.range;
    if (!range) {
        res.status(400).send("Requires Range header");
    }

    const CHUNK_SIZE = 10 ** 6;
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
    };
    res.writeHead(206, headers);
    const videoStream = fs.createReadStream(videoPath, { start, end });
    videoStream.pipe(res);
});

app.listen(PORT, () => {
    console.log(`Running on 127.0.0.1:${PORT}`)
})