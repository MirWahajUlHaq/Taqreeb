const mongoose = require('mongoose');
require('dotenv').config()
var mongoDB = process.env.MONGODB_URI;
mongoose.Promise = global.Promise;
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
var db = mongoose.connection;
db.once('open', () => {
    console.log("connection established");
});