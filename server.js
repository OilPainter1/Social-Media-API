const { User, Thought } = require('./models')
const express = require('express')
const router = require('./routes')
const app = express()
const port = 3002

app.use(express.json())
app.use(router)

app.listen(port,()=>{
    console.log(`app listening on port: ${port}`)
})