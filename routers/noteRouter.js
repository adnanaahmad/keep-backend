// Initialize express router
let router = require('express').Router();
// Import note controller
let noteController = require('../controllers/noteController');
// Import auth controller
let authController = require('../controllers/authController');

// Note routes
router.route('/')
    .get(authController.protect, noteController.getAllNote)
    .post(authController.protect, noteController.createNote);
router.route('/:id')
    .get(authController.protect, noteController.getNote)
    .patch(authController.protect, noteController.updateNote)
    .put(authController.protect, noteController.updateNote)
    .delete(authController.protect, noteController.deleteNote);
// Export API routes
module.exports = router;