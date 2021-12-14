const express = require("express");
const { list, createUser } = require("./controller");
const { validateAuthor } = require("../middlewares/validator")

const router = express.Router();

router.route("/").get(list).post(validateAuthor, createUser);

module.exports = router;
