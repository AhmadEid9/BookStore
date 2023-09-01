const mongoose = require('mongoose');

const likesSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
},
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true
},
});

const Like = mongoose.model('Like', likesSchema);

module.exports = Like;
