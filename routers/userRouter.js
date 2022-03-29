// Initialize express router
let router = require('express').Router();
// Import user controller
let userController = require('../controllers/userController');
// Import auth controller
let authController = require('../controllers/authController');
// User routes
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/verify', authController.verifyAccount);

router.route('/')
    .get(userController.getAllUser)
    .post(userController.createUser);
router.route('/:id')
    .get(userController.getUser)
    .patch(userController.updateUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser)
// Export API routes
module.exports = router;