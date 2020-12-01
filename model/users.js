// const { urlencoded } = require("express");
const db = require("../database/connection");
function createUser(user) {
  return db.insert("users", { ...user });
}

function getUser(email, user_password) {
  // const filter = (user) => user.id === id;
  return db
    .query(`SELECT * FROM users WHERE email = $1 and user_password = $2  `, [
      email,
      user_password,
    ])
    .then(({ rows }) => {
      console.log(rows);
      if (!rows.length) throw new Error(`No user with email  '${email}' found`);
      return rows[0];
    });
}

module.exports = {
  createUser,
  getUser,
};
