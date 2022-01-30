/**
 *  Most of the user-related stuff like creating new users,
 *  logging users in, or updating passwords will be done
 *  in the authentication controller.
 */
const User = require('../models/userModel');
const catchAsync = require('../utility/catchAsync');

exports.signup = catchAsync(async(req, res, next) => {
    const newUser = await User.create(req.body);
    res.status(201).json({
        status: 'success',
        data : {
            newUser
        }
    });
});
