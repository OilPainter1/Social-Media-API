const { mongoose } = require('../config/connection')

const thoughtSchema = new mongoose.Schema({
    thoughtText:{
        type: String,
        required: [true,"Please include a thought"],
        minLength: 1,
        maxLength: 280
    },
    createdAt :{
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true
    }
})

const Thought = mongoose.model('Thought', thoughtSchema)

module.exports = Thought