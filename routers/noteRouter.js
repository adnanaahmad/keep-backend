// Initialize express router
let router = require('express').Router();
// Import note controller
let noteController = require('../controllers/noteController');

// Note routes
router.route('/')
    .get(noteController.getAllNote)
    .post(noteController.createNote);
router.route('/:id')
    .get(noteController.getNote)
    .patch(noteController.updateNote)
    .put(noteController.updateNote)
    .delete(noteController.deleteNote);
// Export API routes
module.exports = router;