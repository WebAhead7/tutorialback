const db = require('../database/connection');

const getAll = () =>
  db.query('SELECT * FROM tutorials').then((res) => res.rows);

const getOne = (id) =>
  db.query(`SELECT * FROM tutorials WHERE id=$1`, [id]).then((res) => {
    if (!res.rows.length) {
      throw new Error('Tutorial not found');
    }
    return res.rows[0];
  });

const createNewTutorial = (data) => {
  const values = [
    data.user_id,
    data.tutorial_title,
    data.tutorial_description,
    data.tutorial_status,
  ];
  return db.query(
    `
      INSERT INTO tutorials(user_id, tutorial_title, tutorial_description, tutorial_status) VALUES($1,$2,$3,$4)`,
    values
  );
};

const edit = (id, newTut) => {
  getOne(id).then(function (result) {
    const values = [
      newTut.tutorial_title ? newTut.tutorial_title : result[0].tutorial_title,
      newTut.tutorial_description
        ? newTut.tutorial_description
        : result[0].tutorial_description,
      newTut.tutorial_status
        ? newTut.tutorial_status
        : result[0].tutorial_status,
      id,
    ];
    return db.query(
      `
    UPDATE tutorials SET
     tutorial_title=$1,
     tutorial_description=$2, 
     tutorial_status=$3
    WHERE id=$4 ;`,
      values
    );
  });
};

const del = (id) => {
  return db.query(
    `
    DELETE FROM tutorials
    WHERE id=$1;`,
    [id]
  );
};

module.exports = {
  createNewTutorial,
  getAll,
  getOne,
  edit,
  del,
};
