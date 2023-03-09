const CommentService = require('../services/comments.service');

class CommentsController {
    //Creating a new comment
    async addComment(req, res) {
        const {comment_id, commentContent} = req.body;

        // Creates new comment and sends a success message
        try {
         const newComment = await CommentService.addComment({
            comment_id: req.body.comment_id,
            commentContent: req.body})
         res.status(200).send({
            success: true,
            message: "Comment created successfully",
            data: newComment
         });
        } catch (error) {
            res.send({
                error: error,
                message: error.message
            });
        }
    }


    //Updating a Comment
    async patchComment(req, res) {
        const commentId = req.params.id;
        const {commentContent} = req.body;

        try {
            // Check if comment exists
            const existingComment = await CommentService.getUser({_id: commentId})

            // Sends a "comment not found" message if comment doesn't exist
            if(!existingComment){
                return res.status(404).send({
                    success: false,
                    messasge: "Comment does not exist!",
                })
            } else {
                // Update the Comment if found
                const updatedComment = await CommentService.patchComment({commentContent})

                // Sends a success message
                return res.status(200).send({
                    success: true,
                    message: 'Comment updated succesfully!',
                    data: updatedComment,
                })
            }
        } catch (error) {
            res.send({
                error: error,
                message: error.message
            })
        }
    }

    
    // Fetching a Single Comment under a specific post
    async getComment(req, res) {
        const comment_id = req.params.id;

        try {
            const foundComment = await CommentService.getComment({_id: comment_id});

            if (!foundComment) {
                return res.status(404).send({
                    success: false,
                    message: "Comment does not exist!",
                });
            } else {
                // Sends a success message with the fetched comment
                res.status(200).send({
                    success: true,
                    message: "Comment fetched successfully!",
                    data: foundComment,
                });
            }
        } catch(error) {
            res.send({
                error: error,
                message: error.message,
            });
        }
    }

    // Fetching all comments under a post
    async getComments(req, res) {
        try {
            const foundComments = await CommentService.getComments();

            // Sends a message if there are no comments yet
            if(!foundComments) {
                return res.status(404).send({
                    success: false,
                    message: "No comments found on the post",
                })
            } else {
                // sends a success message and returns all comments in the post
                return res.status(200).send({
                    success: true,
                    message: "Comments fetched successfully",
                    data: foundComments,
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

module.exports = new CommentsController;