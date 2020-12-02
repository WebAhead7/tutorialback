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
      // const token = jwt.sign({ user: user.userid }, SECRET);
      // const response = {
      //   userid: user.userid,
      //   username: user.username,
      //   firstname: user.firstname,
      //   lastname: user.lastname,
      //   email: user.email,
      //   access_token: token,
      // };
      // console.log(response);
      // console.log(user.rows);
      res.status(200).send(user);
    })
    .catch(next);
}

module.exports = { signup };
