// Initialize express router
let router = require('express').Router();
// Import user controller
let userController = require('../controllers/userController');
// Import auth controller
let authController = require('../controllers/authController');
// User routes
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.patch('/verifyAccount', authController.protect, authController.verifyAccount);

router.route('/')
    .get(authController.protect, userController.getAllUser)
    .post(authController.protect, userController.createUser);
router.route('/:id')
    .get(authController.protect, userController.getUser)
    .patch(authController.protect, userController.updateUser)
    .put(authController.protect, userController.updateUser)
    .delete(authController.protect, userController.deleteUser)
// Export API routes
module.exports = router;