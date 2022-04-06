// Initialize express router
let router = require('express').Router();
// Import label controller
let labelController = require('../controllers/labelController');

// Label routes
router.route('/')
    .get(labelController.getAllLabels)
    .post(labelController.createLabel);
router.route('/:id')
    .get(labelController.getLabel)
    .patch(labelController.updateLabel)
    .put(labelController.updateLabel)
    .delete(labelController.deleteLabel);
// Export API routes
module.exports = router;