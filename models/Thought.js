
const { mongoose } = require('../config/connection')

const reactionSchema = new mongoose.Schema({
    reactionId:{
        type: mongoose.Types.ObjectId,
        default: new mongoose.Types.ObjectId()
    },
    reactionBody:{
        type: String,
        required: true,
        maxLength: 280
    },
    username:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
},
{
    query:{
        getTime(){
            return this.createdAt.toUTCString()
        }
    }
})


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
    },
    reactions: [reactionSchema]
},{
    toJSON: {
      virtuals: true,
    },
    id: false,
  })

const Thought = mongoose.model('Thought', thoughtSchema)

module.exports = { Thought }