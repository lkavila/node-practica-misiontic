const validateAuthor = (req, res, next) => {
  const { name, pseudonym, birthdate } = req.body;
  if (!name || !pseudonym || !birthdate) {
    console.log(name, pseudonym, birthdate)
    res.status(400).json({ error: "there are one o more empty fields" });
  } else {
    next();
  }
}

module.exports = {
  validateAuthor
}