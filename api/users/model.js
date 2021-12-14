const mongoose = require("mongoose");

const collection = "users";

const objectSchema = {
  name: { type: String, required: true },
  pseudonym: { type: String },
  birthdate: { type: Date, required: true },
  active: { type: Boolean, required: true, default: true },
};
const options = {
  timestamps: true,
};
const schema = new mongoose.Schema(objectSchema, options);

const User = mongoose.model(collection, schema);

module.exports = User;
