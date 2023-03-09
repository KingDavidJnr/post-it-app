const Posts = require('../models/posts.model');

class PostsService {
    async addPost(post) {
        return await Posts.create(post)
    }

    async patchPost(id, data) {
        return await Posts.findByIdAndUpdate({_id: id}, data, {new: true})
    }

    async getPost(filter) {
        return await Posts.findOne(filter).populate('post')
    }

    async getPosts(filter) {
        return await Posts.find(filter).populate('post')
    }

    async deletePost(id) {
        return await Posts.findByIdAndDelete({_id: id})
    }
}

module.exports = new PostsService();