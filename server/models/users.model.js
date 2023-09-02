const mongoose = require("mongoose");

const followedBookSchema = new mongoose.Schema({
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    },
  });

const usersSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    
    password: String,
    followed: [followedBookSchema]
}, {
    timestamps: true
})

const model = mongoose.model("User", usersSchema);
module.exports = model;