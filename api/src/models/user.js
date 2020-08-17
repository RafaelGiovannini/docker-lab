const mongoose = require('../database');

const UserSchema = new mongoose.Schema({
    usuario:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    email:{
        type:String,
        lowercase:true,
    },
    idade:{
        type:String,
        required:true,
    },
    senha:{
        type:String,
        required: true,
    },
    createdAt: {
        type:Date,
        default:Date.now,
    }
})

const User = mongoose.model('User', UserSchema)
module.exports = User;