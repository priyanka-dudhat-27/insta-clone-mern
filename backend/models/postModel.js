const mongoose = require("mongoose");
const User = require("../models/userModel");
const PostSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  postedBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  created_date: {
    type: String,
    required: true,
  },
});

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;