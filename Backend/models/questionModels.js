const mongoose = require('mongoose')
const Schema = mongoose.Schema

// a prototype of what info we are going to ask user during signup
const questinsTemplate = new Schema({
    question: {
        type: String,
        required: true
    },
    asker: {
        type: String,
        required: true,
    },
    answers: {
        type: [{
            answerer: String,
            answer: String,
            _id: String
        }],
        required: true,
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('question', questinsTemplate)
// question : collection name
// questinsTemplate : schema name that we defined