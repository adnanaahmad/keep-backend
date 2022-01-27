const catchAsync = require('../utility/catchAsync');
// Import user model
let Note = require('../models/noteModel');

// Handle create Note
exports.createNote = catchAsync(async (req, res, next) => {
    const newNote = await Note.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            note : newNote
        }
    });
});
// Handle view Note
exports.getNote = catchAsync(async (req, res, next) => {
    res.send('getNote api is working');
});
// Handle view all Notes
exports.getAllNote = catchAsync(async (req, res, next) => {
    res.send('getAllNotes api is working');
});
// Handle update Note
exports.updateNote = catchAsync(async (req, res, next) => {
    res.send('updateNote api is working');
});
// Handle delete Note
exports.deleteNote = catchAsync(async (req, res, next) => {
    res.send('deleteNote api is working');
});