const db = require('../database/connection');

const getAll = () => db.query('SELECT * FROM tutorials').then(res => res.rows);

const getOne = (id) => db.query(`SELECT * FROM tutorials WHERE user_id = ${id}`).then(res => res.rows);

const createNewTutorial = (data) => {
  const values = [
    data.user_id,
    data.tutorial_title,
    data.tutorial_descripstion,
    data.tutorial_status,
  ];
  return db.query(
    `
      INSERT INTO tutorials(user_id, tutorial_title, tutorial_descripstion, tutorial_status) VALUES($1,$2,$3,$4)`,
    values
  );
}

// const updateTutorial = (data) => {
//   const id = req.params.id;
//   const userId = req.user.id;
//   const newDog = req.body;
//   model
//     .getDog(dogId)
//     .then((dog) => {
//       if (dog.owner !== userId) {
//         const error = new Error("Unauthorized");
//         error.status = 401;
//         next(error);
//       } else {
//         model.updateDog(dogId, newDog).then((dog) => {
//           res.status(200).send(dog);
//         });
//       }
//     })
//     .catch(next);
// }



module.exports = {
  createNewTutorial, getAll, getOne
};
