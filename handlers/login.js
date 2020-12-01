const model = require("../model/users");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const SECRET = process.env.JWT_SECRET;

function login(req, res, next) {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.user_password;
  model
    .getUser(email, password)
    .then((user) => {
      if (password !== user.user_password) {
        const error = new Error("Unathorized");
        error.status = 401;
        next(error);
        // } else if (password !== user.user_password && email !== user.email) {
        //   res.redirect("/signup");
      } else {
        const token = jwt.sign(
          {
            user: {
              email,
              password,
            },
          },
          SECRET
        );
        res.status(200).send({ user });
        // .res.redirect("/")
      }
    })
    .catch(next);
}

module.exports = { login };
