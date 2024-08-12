const ErrorHandler = require("../utils/errorHandler");
const user = require('../models/userModel')
const catchAsyncError = require("./catchAsyncError");
const jwt = require('jsonwebtoken')

exports.isAuthenticatedUser = catchAsyncError( async (req, res, next)=>{
    const { token} = req.cookies

    if(!token){
        return next(new ErrorHandler('Login first to handle this resourse', 401))
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await user.findById(decoded.id)
    next()
})