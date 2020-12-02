const model = require("../model/users");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const SECRET = process.env.JWT_SECRET;

function signup(req, res, next) {
  console.log(req.body);
  const userid = req.body.userid;
  const username = req.body.username;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const user_password = req.body.user_password;
  model
    .getSignupUser(userid, username, firstname, lastname, email, user_password)
    .then((user) => {
      const token = jwt.sign(
        {
          user: {
            userid,
            username,
            firstname,
            lastname,
            email,
            user_password,
          },
        },
        SECRET
      );
      res.status(200).send({ user });
    })
    .catch(next);
}

module.exports = { signup };
