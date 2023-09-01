const mongoose = require("mongoose");

const booksShcema = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    pic_url: String
}, {timestamps: true})


const model = mongoose.model("Book", booksShcema);
module.exports = model;