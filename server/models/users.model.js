const mongoose = require("mongoose");

const book = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
}, { timestamps: true });

const booksShcema = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    pic_url: String
}, {timestamps: true})

const usersSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    favorite: [booksShcema]
}, {
    timestamps: true
})

const model = mongoose.model("User", usersSchema);
module.exports = model;