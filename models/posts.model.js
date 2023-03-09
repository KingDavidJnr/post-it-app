const { required } = require('joi');
const {model, Schema} = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

const postsSchema = new Schema({
    postContent: {
        type: String,
        required: true,
    },

    postID: {
        type: ObjectId,
        required: true,
    },

}, {timestamps: true});

const Post = new model("post", postsSchema);
module.exports = Post;