const { User } = require('./models')
const express = require('express')
const app = express()
const port = 3001

app.use(express.json())


app.get('/Users', async(req,res)=>{
    try{
        res.json(await User.find({}))
    }
    catch(err){
        console.log(err)
        res.status(500).json('Request failed')
    }
})



app.listen(port,()=>{
    console.log(`app listening on port: ${port}`)
})