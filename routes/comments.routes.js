const express = require('express');
const commentsController = require('../controllers/comments.controller');

const router = express.Router();

//To post a new comment to a post
router.post('/posts/:id/comments', commentsController.addComment);

// GET all comments under a post
router.get('/posts/:id/comments', commentsController.getComments);

//GET a single comment on a post
router.get('/posts/:id/comments/:commentsid', commentsController.getComment);

//PUT: Update a comment on a post
router.put('posts/:id/comments/:commentsid', commentsController.patchComment)

module.exports = router;