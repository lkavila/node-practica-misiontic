const User = require("./model")

const list = async (req, res) => {
  const authors = await User.find();

  res.status(200).json({ authors });
}

const getUserByName = async (req, res) => {
  const name = req.params.author;


}

const createUser = async (req, res) => {
  const { name, pseudonym, birthdate } = req.body;

  const userFound = await User.find({ pseudonym })
  if (userFound.length === 0) {

    user = {
      name: name,
      pseudonym,
      birthdate: new Date(birthdate)
    }
    const newUser = new User(user)
    newUser.save().then((authorCreated) => {
      res.status(200).json(authorCreated);
    });
  } else {
    res.status(400).json({ error: "Pseudonym already exits" });
  }
}

module.exports = {
  list,
  createUser
}