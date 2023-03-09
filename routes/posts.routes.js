const express = require('express');
const postsController = require('../controllers/posts.controller');

const router = express.Router();

// POST: To create a new post
router.post('/posts', postsController.addPost);

// GET: Fetch all posts
router.get('/posts', postsController.getPosts);

//GET: fetch a single post
router.get('/posts/:id', postsController.getPost);

//PUT: Update a post
router.put('posts/:id', postsController.patchPost);

// DELETE: delete a single post
router.delete('/posts/:id', postsController.deletePost)

module.exports = router;