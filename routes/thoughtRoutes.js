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
        let userById = await User.findById(req.body.userId)
        let newThought = await Thought.create({
            thoughtText: req.body.thoughtText,
            username: req.body.username,
        })
        userById.thoughts.push(newThought._id)
        userById.save()
        res.json(newThought)
    }
    catch(err){
        console.log(err)
        res.status(500).json('Thought not posted')
    }
})

router.post('/:thoughtId/reactions', async (req,res)=>{
    try{
        let thoughtById = await Thought.findById(req.params.thoughtId)
        thoughtById.reactions.push({reactionBody: req.body.reactionBody, username: req.body.username})
        thoughtById.save()
        res.json(thoughtById)
    }
    catch(err){
        console.log("error in adding reaction to thought")
        res.status(500).json("error in adding reaction to thought")
    }
})



module.exports = router