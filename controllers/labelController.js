const catchAsync = require('../utility/catchAsync');
// Import label model
let Label = require('../models/labelModel');

// Handle create Label
exports.createLabel = catchAsync(async (req, res, next) => {
    const label = await Label.create({...req.body, user: req.user.id});
    res.status(201).json({
        status: 'success',
        data: {
            label
        }
    });
});
// Handle view Label
exports.getLabel = catchAsync(async (req, res, next) => {
    const label = await Label.findOne({_id: req.params.id, user: req.user.id});
    res.status(200).json({
        status: 'success',
        data: {
            label
        }
    });
});
// Handle view all Labels
exports.getAllLabels = catchAsync(async (req, res, next) => {
    const labels = await Label.find({user: req.user.id});
    res.status(200).json({
        status: 'success',
        data: {
            labels
        }
    });
});
// Handle update Label
exports.updateLabel = catchAsync(async (req, res, next) => {
    const label = await Label.findOneAndUpdate({_id: req.params.id, user: req.user.id}, req.body, {
        new: true,
        runValidators: true
    });
    res.status(200).json({
        status: 'success',
        data: {
            label
        }
    });
});
// Handle delete Label
exports.deleteLabel = catchAsync(async (req, res, next) => {
    await Label.findOneAndDelete({_id: req.params.id, user: req.user.id});
    res.status(204).json({
        status: 'success',
        data: null
    });
});