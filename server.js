const { User, Thought } = require('./models')
const express = require('express')
const router = require('./routes')
const app = express()
const port = 3001


app.use(express.json())
app.use(router)


//Thought routes

app.post('/api/Thoughts', async(req,res)=>{
    try{
        let userId = req.body.userId
        let newThought = await Thought.create({
            thoughtText: req.body.thoughtText,
            username: req.body.username
        })
        res.json(newThought)
        await User.findByIdAndUpdate(req.body.userId, {thoughts: newThought._id })

    }
    catch(err){
        console.log(err)
        res.status(500).json('Thought not posted')
    }
})

app.get('/api/Thoughts', async(req,res)=>{
    let thoughts = await Thought.find({})
    res.json(thoughts)
})




app.listen(port,()=>{
    console.log(`app listening on port: ${port}`)
})