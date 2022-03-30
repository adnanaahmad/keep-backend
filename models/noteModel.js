let mongoose = require('mongoose');
// Setup schema
let noteSchema = mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    label: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Label',
        default: null
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Note must belong to a user'],
    }
});
// Export note
module.exports = mongoose.model('note', noteSchema);