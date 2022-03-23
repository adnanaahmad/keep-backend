/**
 *  Most of the user-related stuff like creating new users,
 *  logging users in, or updating passwords will be done
 *  in the authentication controller.
 */
const User = require('../models/userModel');
const catchAsync = require('../utility/catchAsync');
const jwt = require('jsonwebtoken')
const AppError = require('../utility/appError');
const Email = require('../utility/email');

const signToken = id => {
    return jwt.sign({id}, process.env.JWT_SECRET);
}

exports.signup = catchAsync(async(req, res, next) => {
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    });
    const token = signToken(newUser._id);
    const url = `${req.protocol}://${req.get('host')}/login`;
    //console.log(url);
    await new Email(newUser, url).sendWelcome();
    res.status(201).json({
        status: 'success',
        token,
        data : {
            newUser
        }
    });
});

exports.login = catchAsync(async(req, res, next) => {
    const {email, password} = req.body;
    // check if email and password exist
    if(!email || !password) {
        return next(new AppError('Please provide email and password'), 400);
    }
    // check if user exists and password is correct
    const user = await User.findOne({email}).select('+password');
    if(!user || !(await user.correctPassword(password, user.password))) {
        return next(new AppError('Incorrect email or password'), 401);
    }
    // if everything is ok send token to client
    const token = signToken(user._id);
    res.status(200).json({
        status: 'success',
        token,
    });
});