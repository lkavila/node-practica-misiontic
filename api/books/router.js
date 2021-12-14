const express = require("express");
const { list, getBooksByAuthor, createBook, deleteBook } = require("./controller");

const router = express.Router();

router.route("/").get(list).post(createBook);

router.route("/:author_id").get(getBooksByAuthor);

router.route("/:id").delete(deleteBook)

module.exports = router;