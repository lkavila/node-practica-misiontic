const Books = require("./model");

const list = async (req, res) => {
  const books = await Books.find().populate("author", ["_id", "name", "pseudonym"]);
  res.status(200).json({ books })
}

const getBooksByAuthor = (req, res) => {
  const author = req.params.author
  Books.find({ author })
    .then((books) => {
      res.status(200).json({ books })
    })
}

const createBook = (req, res) => {
  const { name, author, published_date } = req.body;
  const book = {
    name,
    author,
    published_date
  }
  const newBook = new Books(book);
  newBook.save().then((bookCreated => {
    res.status(200).json({ bookCreated })
  }))
}

const deleteBook = (req, res) => {
  const id = req.params.id;
  Books.deleteOne({ _id: id }).then((result) => {
    res.status(200).json({ result });
  })
}

module.exports = {
  list,
  getBooksByAuthor,
  createBook,
  deleteBook
}