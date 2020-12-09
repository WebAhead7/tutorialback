const model = require('../model/users');
// const jwt = require('jsonwebtoken');
// const dotenv = require('dotenv');
// dotenv.config();

// const SECRET = process.env.JWT_SECRET;

function signup(req, res, next) {
  const userid = req.body.userid;
  const username = req.body.username;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const user_password = req.body.user_password;

  model
    .getSignupUser(userid, username, firstname, lastname, email, user_password)
    .then((user) => {
      // const token = jwt.sign({ user: userid }, SECRET, {
      //   expiresIn: '1h',
      // });
      const response = {
        msg: 'You have successfully signed up',
        username: user.username,
        email: user.email,
        // access_token: token,
      };
      res.status(200).send(response);
    })
    .catch(next);
}

module.exports = { signup };
// function signup(req, res, next) {
//   const userid = req.body.userid;
//   const username = req.body.username;
//   const firstname = req.body.firstname;
//   const lastname = req.body.lastname;
//   const email = req.body.email;
//   const user_password = req.body.user_password;

//   model
//     .getSignupUser(userid, username, firstname, lastname, email, user_password)
//     .then((user) => {
//       const token = jwt.sign({ user: userid }, SECRET, {
//         expiresIn: '1h',
//       });
//       const response = {
//         username: user.username,
//         email: user.email,
//         access_token: token,
//       };
//       res.status(200).send(response);
//     })
//     .catch(next);
// }
