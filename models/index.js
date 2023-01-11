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
    }


})

const User = mongoose.model('User', userSchema)

module.exports= { User }