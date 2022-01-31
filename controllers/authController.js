/**
 *  Most of the user-related stuff like creating new users,
 *  logging users in, or updating passwords will be done
 *  in the authentication controller.
 */
const User = require('../models/userModel');
const catchAsync = require('../utility/catchAsync');
const jwt = require('jsonwebtoken')

exports.signup = catchAsync(async(req, res, next) => {
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    });
    const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET);
    res.status(201).json({
        status: 'success',
        token,
        data : {
            newUser
        }
    });
});
