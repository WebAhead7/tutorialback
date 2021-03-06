const express = require('express');
const handleError = require('./middleware/error');
const login = require('./handlers/login');
const datalist = require('./handlers/datalist');
const signup = require('./handlers/signup');
const verifyUser = require('./middleware/auth');
const logger = require('./middleware/logger');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 4000;
const server = express();
server.use(cookieParser());
server.use(express.urlencoded());
server.use(logger);
server.use(cors());
server.use(express.json());

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.get('/tutorials', datalist.getAll);
server.get('/tutorials/:id', datalist.getOne);
server.post('/tutorials/', verifyUser, datalist.post);
server.put('/tutorials/:id', verifyUser, datalist.put);
server.delete('/tutorials/:id', verifyUser, datalist.del);
server.post('/log-in', login.login);
server.post('/signup', signup.signup);
server.get('/users', datalist.getAllUsers);
server.get('/users/:id', login.getOne);

server.use(handleError);

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
