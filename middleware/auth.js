const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const model = require('../model/users');

dotenv.config();
const SECRET = process.env.JWT_SECRET;

function verifyUser(req, res, next) {
  const authHeader = req.headers.authorization;
  // console.log(1);
  if (!authHeader) {
    // console.log(2);
    const error = new Error('Authorization header is required');
    error.status = 400;
    next(error);
  } else {
    // console.log(3);
    try {
      const token = authHeader.replace('Bearer ', '');
      // if verification fails JWT throws an error, hence the try/catch
      const tokenData = jwt.verify(token, SECRET);
      // console.log(6, tokenData);
      model
        .getOne(tokenData.user)
        .then((user) => {
          // console.log(4);
          // attach the authenticated user to the request object
          // so other handlers can access it without doing all this nonsense
          // console.log(user);
          req.user = user;
          next();
        })
        .catch((err) => {
          // console.log(err);
          next(err);
        });
    } catch (error_we_dont_use) {
      // catch statements have to capture an error variable, even if you don't need it
      // we don't use the caught error, since we know it came from jwt.verify
      const error = new Error('Unauthorized - No token');
      error.status = 401;
      next(error);
    }
  }
}

module.exports = verifyUser;
