let mongoose = require('mongoose');
let validator = require('validator');
// Setup schema
let userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us your name']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide valid email']
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    password: {
        type: String,
        required: [true, 'Please provide your password']
    },
    confirmPassword: {
        type: String
    }
});
// Export user
module.exports = mongoose.model('user', userSchema);