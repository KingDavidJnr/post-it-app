const PostService = require('../services/posts.service');

class PostController {
    //Adding a new post
    async addPost(req, res) {
        const {user_id, postMessage} = req.body;

        // Creates new post and sends a success message
        try {
         const newPost = await PostService.createPost({
            post_id: req.body.user_id,
            post_content: req.body.postMessage})
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
                const updatePost = await PostService.updatePost({postContent})

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

    // Fetching a Single post

    // Fetching all posts
}