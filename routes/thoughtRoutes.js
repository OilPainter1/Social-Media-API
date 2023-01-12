const router = require('express').Router()
const { Thought,User } = require('../models')

router.get('/', async(req,res)=>{
    let thoughts = await Thought.find({})
    res.json(thoughts)
})

router.get('/:thoughtId', async(req,res)=>{
    try{
    let thoughtById = await Thought.findById(req.params.thoughtId)
    res.json(thoughtById)
    }
    catch(err){
        console.log('error finding thought by Id')
        res.status(500).json('error finding thought by Id')
    }
})

router.post('/', async(req,res)=>{
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



module.exports = router