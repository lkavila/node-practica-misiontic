const mongoose = require("mongoose");

const collection = "books";

const objectSchema = {
  name: { type: String, required: true },
  published_date: { type: Date, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
};
const options = {
  timestamps: true,
};
const schema = new mongoose.Schema(objectSchema, options);

const Books = mongoose.model(collection, schema);

module.exports = Books;