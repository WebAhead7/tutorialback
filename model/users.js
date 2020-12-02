// const { urlencoded } = require("express");
const db = require('../database/connection');

// function createUser(user) {
//   return db.query(" INSERT INTO users", { ...user });
// }
const getOne = (id) =>
  db.query(`SELECT * FROM users WHERE userid=$1`, [id]).then((res) => {
    if (!res.rows.length) {
      throw new Error('User not found');
    }
    return res.rows[0];
  });

function getUser(email) {
  return db.query(`SELECT * FROM users WHERE email=$1`, [email]).then((res) => {
    if (!res.rows.length) throw new Error(`No user with that email`);
    return res.rows[0];
  });
}

function getSignupUser(
  userid,
  username,
  firstname,
  lastname,
  email,
  user_password,
  access_token
) {
  return db.query(
    `INSERT INTO users (userid,username,firstname,lastname,email,user_password, access_token) VALUES($1,$2,$3,$4,$5,$6,$7)`,
    [userid, username, firstname, lastname, email, user_password, access_token]
  );
  // .then(({ rows }) => {
  //   // console.log(rows);
  //   return rows[0];
  // });
}

const getAllUsers = () =>
  db.query('SELECT * FROM users').then((res) => res.rows);

module.exports = {
  getUser,
  getSignupUser,
  getAllUsers,
  getOne,
};
