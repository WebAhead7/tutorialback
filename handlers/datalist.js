const datamodel = require("../model/datalist");
const usermodel = require("../model/users");

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
    .then((data) => res.send(data))
    .catch(next);
};

const post = (req, res, next) => {
  const newTut = req.body;
  datamodel
    .createNewTutorial(newTut)
    .then((data) => res.status(201).send(data))
    .catch(next);
};
const put = (req, res, next) => {
  const id = req.params.id;
  datamodel
    .getOne(id)
    .then((data) => res.send(data))
    .catch(next);
};
const del = (req, res, next) => {
  const id = req.params.id;
  datamodel
    .getOne(id)
    .then((data) => res.send(data))
    .catch(next);
};

module.exports = { getAll, getOne, post, put, del, getAllUsers };
