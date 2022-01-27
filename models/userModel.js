let mongoose = require('mongoose');
// Setup schema
let userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    password: {
        type: String,
        required: true
    }
});
// Export user
module.exports = mongoose.model('user', userSchema);