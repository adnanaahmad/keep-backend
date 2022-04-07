const catchAsync = require('../utility/catchAsync');
// Import label model
let Note = require('../models/noteModel');

// Handle create Note
exports.createNote = catchAsync(async (req, res, next) => {
    const newNote = await Note.create({...req.body, user: req.user.id});
    res.status(201).json({
        status: 'success',
        data: {
            note : newNote
        }
    });
});
// Handle view Note
exports.getNote = catchAsync(async (req, res, next) => {
    const note = await Note.findOne({_id: req.params.id, user: req.user.id});
    res.status(200).json({
        status: 'success',
        data: {
            note
        }
    });
});
// Handle view all Notes
exports.getAllNote = catchAsync(async (req, res, next) => {
    const notes = await Note.find({user: req.user.id});
    res.status(200).json({
        status: 'success',
        data: {
            notes
        }
    });
});
// Handle update Note
exports.updateNote = catchAsync(async (req, res, next) => {
    const note = await Note.findOneAndUpdate({_id: req.params.id, user: req.user.id}, req.body, {
        new: true,
        runValidators: true
    });
    res.status(200).json({
        status: 'success',
        data: {
            note
        }
    });
});
// Handle delete Note
exports.deleteNote = catchAsync(async (req, res, next) => {
    await Note.findOneAndDelete({_id: req.params.id, user: req.user.id});
    res.status(204).json({
        status: 'success',
        data: null
    });
});