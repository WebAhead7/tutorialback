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
  return db.query(
    `INSERT INTO users (userid,username,firstname,lastname,email,user_password) VALUES($1,$2,$3,$4,$5,$6)`,
    [userid, username, firstname, lastname, email, user_password]
  );
  // .then(({ rows }) => {
  //   // console.log(rows);
  //   return rows[0];
  // });
}

const getAllUsers = () =>
  db.query("SELECT * FROM users").then((res) => res.rows);

module.exports = {
  getUser,
  getSignupUser,
  getAllUsers,
};
