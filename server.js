const express = require('express');
const handleError = require('./middleware/error');
const login = require("./handlers/login");
const datalist = require("./handlers/datalist");
const editdata = require("./handlers/editdata");
const signup = require("./handlers/signup");
const handleError = require("./middleware/error");

const express = require("express");

const server = express();
server.use(express.urlencoded());

server.get('/tutorials', datalist.getAll);
server.get('/tutorials/:id', datalist.getOne);
server.post("/tutorials/", datalist.post);
server.put("/tutorials/:id", datalist.put);
server.delete("/tutorials/:id", datalist.del);
server.get("/log-in", login.login);

server.use(handleError);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

