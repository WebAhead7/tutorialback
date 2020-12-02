// const { urlencoded } = require("express");
const db = require("../database/connection");

// function createUser(user) {
//   return db.query(" INSERT INTO users", { ...user });
// }

function getUser(email, user_password) {
  return db
    .query(`SELECT * FROM users WHERE email = $1 and user_password = $2  `, [
      email,
      user_password,
    ])
    .then(({ rows }) => {
      console.log(rows);
      if (!rows.length) throw new Error(`here are no users`);
      return rows[0];
    });
}

function getSignupUser(
  userid,
  username,
  firstname,
  lastname,
  email,
  user_password
) {
  return db
    .query(
      `SELECT * FROM users WHERE userid = $1 and username = $2 and firstname = $3 and lastname = $4 and  email = $5 and user_password = $6  `,
      [userid, username, firstname, lastname, email, user_password]
    )
    .then(({ rows }) => {
      console.log(rows);
      if (!rows.length) throw new Error(`here are no users`);
      return rows[0];
    });
}

module.exports = {
  getUser,
  getSignupUser,
};
