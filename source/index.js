const path = require('path')

const express = require('express')
const cors = require('cors')

const port = process.env.PORT || 8080

const app = express()
app.use(cors())

const db = require('./database/mongo')
db.connect();

require('./routes/router')(app)

app.listen(port, () => { 
    console.log("[SERVER] Running at http://localhost:%i/", port)
    console.log("[Route] http://localhost:%i/user/<username>", port)
    console.log("[Route] http://localhost:%i/login/<username>&<password>", port)
    console.log("[Route] http://localhost:%i/register/<username>&<password>", port)

 })