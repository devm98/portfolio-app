import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  author: String,
  pages: Number,
  price: Number,
});

mongoose.models = {}

const Book = mongoose.model("Book", bookSchema);

export default Book;
