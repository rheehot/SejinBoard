const createPost = require('./methods/createpost');
const deletePost = require('./methods/deletepost');
const readPost = require('./methods/readpost');
const updatePost = require('./methods/updatepost');
const listPost = require('./methods/listpost');
const createComment = require('./methods/comment/createcomment');
const deleteComment = require('./methods/comment/deletecomment');
const updateComment = require('./methods/comment/updatecomment');

module.exports.addNewPost = createPost.addNewPost;
module.exports.openNewPost = createPost.openNewPost;
module.exports.deletePost = deletePost.deletePost;
module.exports.showPost = readPost.showPost;
module.exports.updatePost = updatePost.updatePost;
module.exports.openUpdatePost = updatePost.openUpdatePost;
module.exports.listPost = listPost.listPost;
module.exports.addComment = createComment.addComment;
module.exports.deleteComment = deleteComment.deleteComment;
module.exports.updateComment = updateComment.updateComment;