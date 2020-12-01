const express = require("express");
const handleError = require("./middleware/error");
const users = require("./handlers/login");

const server = express();
server.use(express.urlencoded());

server.get("/log-in", users.login);

server.use(handleError);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
