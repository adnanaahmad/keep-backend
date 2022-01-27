// Import user model
User = require('../models/userModel');

// Handle create user
exports.createUser = function (req, res) {
    res.send('createUser api is working');
};
// Handle view user
exports.getUser = function (req, res) {
    res.send('getUser api is working');
};
// Handle view all users
exports.getAllUser = function (req, res) {
    res.send('getAllUser api is working');
};
// Handle update user
exports.updateUser = function (req, res) {
    res.send('updateUser api is working');
};
// Handle delete user
exports.deleteUser = function (req, res) {
    res.send('deleteUser api is working');
};