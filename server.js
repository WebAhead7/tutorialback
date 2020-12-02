const express = require('express');
const handleError = require('./middleware/error');
const login = require('./handlers/login');
const datalist = require('./handlers/datalist');
const signup = require('./handlers/signup');
const verifyUser = require('./middleware/auth');
const logger = require('./middleware/logger');

const PORT = process.env.PORT || 3000;
const server = express();
server.use(express.urlencoded());
server.use(logger);

server.get('/tutorials', datalist.getAll);
server.get('/tutorials/:id', datalist.getOne);
server.post('/tutorials/', verifyUser, datalist.post);
server.put('/tutorials/:id', verifyUser, datalist.put);
server.delete('/tutorials/:id', verifyUser, datalist.del);
server.post('/log-in', login.login);
server.post('/signup', signup.signup);
server.get('/users', datalist.getAllUsers);
server.get('/users/:id', login.getOneUserBySerialID);

server.use(handleError);

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
