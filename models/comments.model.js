const { required } = require('joi');
const {model, Schema} = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

const commentsSchema = new Schema({
    commentsBody: {
        type: String,
        required: true,
    },

    commentsID: {
        type: ObjectId,
        required: true,
    },

    timestamps: true,
});

const Comments = new model("comments", commentsSchema);
module.exports = Comments;