const datamodel = require('../model/datalist');
const usermodel = require('../model/users');

const getAll = (req, res, next) => {
  datamodel
    .getAll()
    .then((data) => res.send(data))
    .catch(next);
};

const getAllUsers = (req, res, next) => {
  usermodel
    .getAllUsers()
    .then((data) => res.send(data))
    .catch(next);
};

const getOne = (req, res, next) => {
  const id = req.params.id;
  datamodel
    .getOne(id)
    .then((data) => {
      res.send(data);
    })
    .catch(next);
};

const post = (req, res, next) => {
  const user = req.user;
  const newTut = req.body;
  newTut.user_id = user.id;
  datamodel
    .createNewTutorial(newTut)
    .then((data) => res.status(201).send(data))
    .catch(next);
};

const put = (req, res, next) => {
  const id = req.params.id;
  const userId = req.user.id;
  let newTut = req.body;
  datamodel
    .getOne(id)
    .then((data) => {
      if (data[0].user_id !== userId) {
        const error = new Error(
          'Unauthorized - Do not have access to edit this tutorial'
        );
        error.status = 401;
        next(error);
      } else {
        let finish = datamodel.edit(id, newTut);
        res.status(200).send(finish);
      }
    })
    .catch(next);
};

const del = (req, res, next) => {
  const id = req.params.id;
  const userId = req.user.id;

  datamodel
    .getOne(id)
    .then((data) => {
      if (data[0].user_id !== userId) {
        const error = new Error(
          'Unauthorized - Do not have access to delete this tutorial'
        );
        error.status = 401;
        next(error);
      } else {
        datamodel.del(id).then(() => res.status(204).send());
      }
    })
    .catch(next);
};

module.exports = { getAll, getOne, post, put, del, getAllUsers };
