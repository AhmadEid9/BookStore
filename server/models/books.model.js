const mongoose = require("mongoose");

const booksShcema = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    picture: String
}, {timestamps: true})


const model = mongoose.model("Book", booksShcema);
module.exports = model;