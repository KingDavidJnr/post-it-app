const express = require('express');
const homeRouter = require('./routes/index.routes');
const userRouter = require('./routes/users.routes');
const commentsRouter = require('./routes/comments.routes');
const postsRouter = require('./routes/posts.routes');
const mongoose = require('mongoose');
const res = require('express/lib/response');
mongoose.set('strictQuery', true);
const database = require('./config/database.config');
const constants = require('./constants/constants');
const Posts = require('./models/posts.model');
const Users = require('./models/users.model');
const Comments = require('./models/comments.model');

//Linking access to .env file for database access
require('dotenv').config();
const uri = process.env.MONGODB_URL;

//Initializing the server app
const app = express();

//Setting up middleware for JSON requests
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//Setting the server to listen to all Posts requests
app.get('/posts', postsRouter)
app.get('/posts/:id', postsRouter)
app.post('/posts', postsRouter)
app.put('/posts/:id', postsRouter)
app.delete('/posts/:id', postsRouter)

//seting the server to listen to all User requests
app.get('/users', userRouter)

// Setting the server to listen to all Comments requests
app.get('/posts/:id/comments', commentsRouter)


const PORT = process.env.PORT || 8080;

// Setting the server to stay up and running to process HTTP requests
app.listen(PORT, () => {
    console.log("Server connected to Port", PORT);
    database();
});