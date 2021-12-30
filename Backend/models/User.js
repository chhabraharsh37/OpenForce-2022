const mongoose = require('mongoose'); 
const {Schema} = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        profilePic: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        }
    }
)
module.exports=mongoose.model('user',UserSchema);