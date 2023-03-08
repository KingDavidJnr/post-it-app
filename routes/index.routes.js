const express = require('express');
const router = express.Router();
const postsRouter = require('./posts.routes');
const usersRouter = require('./users.routes');
const commentsRouter = require('./comments.routes');

router.use('/posts', postsRouter);
router.use('/users', usersRouter);
router.use('/comments', commentsRouter);

module.exports = router;