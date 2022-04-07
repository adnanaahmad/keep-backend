// Initialize express router
let router = require('express').Router();
// Import label controller
let labelController = require('../controllers/labelController');
// Import auth controller
let authController = require('../controllers/authController');

// Label routes
router.route('/')
    .get(authController.protect, labelController.getAllLabels)
    .post(authController.protect, labelController.createLabel);
router.route('/:id')
    .get(authController.protect, labelController.getLabel)
    .patch(authController.protect, labelController.updateLabel)
    .put(authController.protect, labelController.updateLabel)
    .delete(authController.protect, labelController.deleteLabel);
// Export API routes
module.exports = router;