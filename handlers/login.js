const model = require('../model/users');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
// const bcrypt = require('bcryptjs');

dotenv.config();

const SECRET = process.env.JWT_SECRET;

// get one user
const getOne = (req, res, next) => {
  const id = req.params.id;
  model
    .getOneUserBySerialID(id)
    .then((data) => {
      res.send(data);
    })
    .catch(next);
};

function login(req, res, next) {
  const obj = {
    msg: '',
  };
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.user_password;
  model
    .getUser(email)
    .then((user) => {
      console.log(password);
      console.log(user.user_password);
      if (password !== user.user_password) {
        console.log(1);
        const error = new Error('Wrong Password - Unathorized');
        obj.msg = 'Wrong Password - Unathorized';
        res.status(404).send(obj);
        next(error);
      } else {
        console.log(2);
        const token = jwt.sign({ user: user.userid }, SECRET);
        console.log(token);
        console.log(3);
        obj.msg = 'Logged in';
        console.log(4);
        res.cookie('access_token', token);
        console.log(5);
        res.status(200).send(obj);
        console.log(6);
      }
    })
    .catch(next);
}

module.exports = { getOne, login };
// function login(req, res, next) {
//   const email = req.body.email;
//   const password = req.body.user_password;
//   model
//     .getUser(email)
//     .then((user) => {
//       if (password !== user.user_password) {
//         const error = new Error('Wrong Password - Unathorized');
//         error.status = 401;
//         next(error);
//       } else {
//         const token = jwt.sign({ user: user.userid }, SECRET, {
//           expiresIn: '1h',
//         });
//         res.status(200).send({ access_token: token });
//       }
//     })
//     .catch(next);
// }
