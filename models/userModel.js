let mongoose = require('mongoose');
let validator = require('validator');
const bcrypt = require('bcrypt');
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
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
            // this function only runs on create and save
            validator: function(el) {
                return el === this.password;
            }
        }
    }
});
/**
 * this function only runs if password is modified
 */
userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);
    this.confirmPassword = undefined;
    next();
});
// Export user
module.exports = mongoose.model('user', userSchema);