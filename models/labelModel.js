let mongoose = require('mongoose');
// Setup schema
let labelSchema = mongoose.Schema({
    name: {
        type: String,
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
module.exports = mongoose.model('Label', labelSchema);