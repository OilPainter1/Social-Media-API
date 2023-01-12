const router = require('express').Router()
const { User,Thought} = require('../models')

router.get('/', async(req,res)=>{
    try{
        res.json( await User.find({}))
    }
    catch(err){
        console.log(err)
        res.status(500).json('Request failed')
    }
})

router.get('/:userId', async(req,res)=>{
    try{
        let userById = await User.findById(req.params.userId).populate('thoughts').populate('friends')
        res.json(userById)
    }
    catch(err){
        console.log('error finding user by Id')
        res.status(500).json('error finding user by Id')
    }
})

router.delete('/:userId', async(req,res)=>{
    try{
        res.json(await User.findByIdAndDelete(req.params.userId))
    }
    catch(err){
        console.log('error in  deleting user')
        res.status(500).json('error in deleting user')
    }
})

router.post('/', async(req,res)=>{
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

router.put('/:userId/friends/:friendId', async(req,res)=>{
    try{
    let newFriend = await User.findById(req.params.friendId)
    let updatedUser = await User.findById(req.params.userId)
    updatedUser.friends.push(newFriend._id)
    updatedUser.save()
    res.json(updatedUser)
    }
    catch(err){
        console.log(err)
        res.status(500).json('error in adding friend to user')
    }
})

module.exports = router