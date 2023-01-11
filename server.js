const { User } = require('./models')
const express = require('express')
const app = express()
const port = 3001

app.use(express.json())


app.get('/api/Users', async(req,res)=>{
    try{
        res.json(await User.find({}))
    }
    catch(err){
        console.log(err)
        res.status(500).json('Request failed')
    }
})
app.post('/api/Users', async(req,res)=>{
    try{
        let newUser = await User.create({
            username: req.body.username.trim(),
            email: req.body.email
        })
        res.json(newUser)
    }
    catch(err){
        console.log(err)
        res.status(500).json('Error in adding user')
    }
})



app.listen(port,()=>{
    console.log(`app listening on port: ${port}`)
})