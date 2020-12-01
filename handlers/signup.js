const model = require("../model/users");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const SECRET = process.env.JWT_SECRET;

function signup(req, res, next) {
  const username = req.body.username;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  model
    .getUser(username, firstname, lastname, email)
    .then((user) => {
      const token = jwt.sign({
        user: {
          username,
          firstname,
          lastname,
          email,
        },
        SECRET,
      });
      res.status(200).send({ user });
    })
    .catch(next);
}

module.exports = { signup };
