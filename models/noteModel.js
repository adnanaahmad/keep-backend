let mongoose = require('mongoose');
// Setup schema
let noteSchema = mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
});
// Export note
module.exports = mongoose.model('note', noteSchema);