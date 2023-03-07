const express = require('express');
const homeRouter = require('./routes/index.routes');
const userRouter = require('./routes/users.routes');
const commentsRouter = require('./routes/comments.routes');
const postsRouter = require('./routes/posts.routes');
const mongoose = require('mongoose');
const res = require('express/lib/response');
mongoose.set('strictQuery', true);

//Linking access to .env file for database access
require('dotenv').config();
const url = process.env.MONGODB_URL;

//Initializing the server app
const app = express();

//Setting up middleware for JSON requests
app.use(espress.json());
app.use(express.urlencoded({extended: true}));

//Setting the server to listen to all requests
app.use('/api/v1', homeRouter);
app.use('/api/v1/posts', postsRouter, async () => {
    console.log("View all recent posts");
    const posts = await Posts.find().populate('posts');
    res.status(200).send({
        message: posts
    });
});

app.use('/api/v1/users', userRouter, async () => {
    console.log("View all users");
    const users = await Users.find().populate('users');
    res.status(200).send({
        message: users
    });
});

//Conncecting Server to the database
mongoose.connect(url, {
    dbName: "postItApp",
    useNewUrlparser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Server connected to database"))
.catch(err => console.log(err,':', err.message));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("Server connected to Port", PORT));