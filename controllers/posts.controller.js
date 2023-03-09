const PostService = require('../services/posts.service');

class PostsController {
    //Adding a new post
    async addPost(req, res) {
        const {post_id, post_content} = req.body;

        // Creates new post and sends a success message
        try {
         const newPost = await PostService.addPost({
            post_id: req.body.post_id,
            post_content: req.body.post_content})
         res.status(200).send({
            success: true,
            message: "Post created successfully",
            data: newPost
         });
        } catch (error) {
            res.send({
                error: error,
                message: error.message
            });
        }
    }


    //Updating a Post
    async patchPost(req, res) {
        const postId = req.params.id;
        const {postContent} = req.body;

        try {
            // Check if post exists
            const existingPost = await PostService.getPost({_id: postId})

            // Sends a "Post not found" message if post doesn't exist
            if(!existingPost){
                return res.status(404).send({
                    success: false,
                    messasge: "Post does not exist!",
                })
            } else {
                // Update the post if found
                const updatePost = await PostService.patchPost({postContent})

                // Sends a success message
                return res.status(200).send({
                    success: true,
                    message: 'Post updated succesfully!',
                    data: updatedPost,
                })
            }
        } catch (error) {
            res.send({
                error: error,
                message: error.message
            })
        }
    }

    //Deleting a post using its ID
    async deletePost(req, res) {
        const post_id = req.params.id;

        // Check if post exists
        try {
            const existingPost = await PostService.deletePost({_id: post_id});

            // Throws a "Post not found" message if post doesn't exist
            if(!existingPost) {
                return res.status(404).send({
                    success: false,
                    message: "Post does not exist",
                });
            } else {
                const deletedPost = await PostService.deletePost(post_id);

                // Sends a sucess response message after post deletion
                res.status(200).send({
                    success: true,
                    message: "Post has been deleted successfully",
                    data: deletedPost,
                })
            }
        } catch(error) {
            res.send({
                error: error,
                message: error.message,
            })
        }
    }

    // Fetching a Single post
    async getPost(req, res) {
        const post_id = req.params.id;

        try {
            const foundPost = await PostService.getPost({_id: post_id});

            if (!foundPost) {
                return res.status(404).send({
                    success: false,
                    message: "Post does not exist!",
                });
            } else {
                // Sends a success message with the post
                res.status(200).send({
                    success: true,
                    message: "Post fetched successfully!",
                    data: foundPost,
                });
            }
        } catch(error) {
            res.send({
                error: error,
                message: error.message,
            });
        }
    }

    // Fetching all posts
    async getPosts(req, res) {
        try {
            const foundPosts = await PostService.getPosts();

            // Sends a message if there are no posts yet
            if(!foundPosts) {
                return res.status(404).send({
                    success: false,
                    message: "No posts found on the app",
                })
            } else {
                // sends a success message and returns all posts
                return res.status(200).send({
                    success: true,
                    message: "Posts fetched successfully",
                    data: foundPosts,
                })
            }
        } catch(error) {
            res.send({
                error: error,
                message: error.message,
            });
        };
    };
};

module.exports = new PostsController;