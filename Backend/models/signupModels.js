const mongoose = require('mongoose')
const Schema = mongoose.Schema

// a prototype of what info we are going to ask user during signup
const signupTemplate = new Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('signupdata', signupTemplate)
// signupdata : collection name
// signupTemplate : schema name that we defined