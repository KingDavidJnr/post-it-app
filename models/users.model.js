const { required } = require('joi');
const {model, Schema} = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true,
    },

    firstName: {
        type: String,
        required: true,
    },

    lastName: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        unique: true,
        required: true,
    },

    userID: {
        type: ObjectId,
        required: true,
    },

}, {timestamps: true});

const User = new model("user", userSchema);
module.exports = User;