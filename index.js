const express = require("express")
const fs = require("fs");
const routerTest = require('./routes/routeTest')
const loginRoute = require('./routes/login')
const databaseAccess = require('./utils/databaseAccess')

const app = express()
const PORT = 666

 

databaseAccess.dbConnection()

app.use('/test', routerTest)
app.use('/login', loginRoute)

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index2.html");
})

app.get('/ws', (req, res) => {
    res.sendFile(__dirname + "/sockets.html");
})

app.listen(PORT, () => {
    console.log(`Running on 127.0.0.1:${PORT}`)
})