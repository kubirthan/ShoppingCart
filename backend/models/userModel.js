const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter name']
    },
    email: {
        type: String,
        required: [true, 'Please enter email'],
        unique: true,
        validator: [validator.isEmail, 'Please enter valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter paswword'],
        maxLength: [6, 'Password cannot exceed 6 characters']
    },
    avatar : {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    },
    resetPasswordToken: String,
    resetPasswordTokenExpire: Date,

    createdAt: {
        type: Date,
        default: Date.now
    }
})

userSchema.pre('save', function (next){
    this.password = bcrypt.hash(this.password, 10)
})


const model = mongoose.model('User', userSchema)

module.exports = model