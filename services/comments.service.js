const Comments = require('../models/comments.model');

class CommentsService {
    async createComment(comment) {
        return await Comments.create(comment)
    }

    async updateComment(id, data) {
        return await Comments.findByIdAndUpdate({_id: id}, data, {new: true})
    }

    async getComment(filter) {
        return await Comments.findOne(filter).populate('comment')
    }

    async getComments(filter) {
        return await Comments.find(filter).populate('comment')
    }

    async deletePost(id) {
        return await Comments.findByIdAndDelete({_id: id})
    }
}

module.exports = new CommentsService();