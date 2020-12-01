const db = require('../database/connection');

function createNewTutorial(data) {
  const values = [
    data.tutorial_title,
    data.tutorial_status,
    data.tutorial_descripstion,
  ];
  return db.query(
    `
      INSERT INTO tutorials(tutorial_title, tutorial_status, tutorial_descripstion) VALUES($1,$2,$3)`,
    values
  );
}

module.exports = {
  createNewpost,
};
