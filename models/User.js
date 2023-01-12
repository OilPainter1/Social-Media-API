const { Schema } = require('mongoose')
const { mongoose } = require('../config/connection')
const userSchema = new mongoose.Schema({
    username: {
       type: String,
       unique: true,
       required: [true, 'Please enter a username']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please enter an email'],
        match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }]
    ,
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
},{
    toJSON: {
      virtuals: true,
    },
    id: false,
  })

const User = mongoose.model('User', userSchema)

module.exports = { User }