const model = require('../model/users');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const SECRET = process.env.JWT_SECRET;

function signup(req, res, next) {
  // console.log(req.body);
  const userid = req.body.userid;
  const username = req.body.username;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const user_password = req.body.user_password;
  const access_token = jwt.sign({ user: userid }, SECRET, {
    expiresIn: '1h',
  });
  // console.log(access_token);

  model
    .getSignupUser(
      userid,
      username,
      firstname,
      lastname,
      email,
      user_password,
      access_token
    )
    .then((user) => {
      const response = {
        username: user.username,
        email: user.email,
        access_token: user.access_token,
      };
      // console.log(response);
      // console.log(user.rows);
      res.status(200).send(response);
    })
    .catch(next);
}

module.exports = { signup };
