const mongoose = require('mongoose')

async function connect() {
    await mongoose.connect('mongodb://127.0.0.1:27017/social-media-api')
}

connect()

module.exports = { mongoose }