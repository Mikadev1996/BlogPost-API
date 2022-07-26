const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    post: {type: Schema.Types.ObjectId, ref: 'Post', required: 'true'},
    text: {type: String, required: true},
    timestamp: {type: Date, required: true},
    username: {type: String}
})

module.exports = mongoose.model('Comment', CommentSchema);