const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: String,
  ISBN: String,
  author: String,
  Description : String,
  publishing_date : Number,
})

const BookModel = mongoose.model("books", bookSchema);

module.exports = BookModel
