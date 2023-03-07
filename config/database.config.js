const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const constants = require('./constants/constants');
const Url = "mongodb+srv://DavidOduse:David1996%40@cluster0.pl4a4kq.mongodb.net/?retryWrites=true&w=majority";

const database = () => {
    mongoose
    .connect(Url, { 
        dbName: "post-it-app",
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
    .then(() => {
        console.log(constants.MESSAGES.CONNECTED, ": Connected to Mongoose Database!");
    })
    .catch((err) => {
        console.error(constants.MESSAGES.ERROR,':', err);
    });
}

module.exports = database;