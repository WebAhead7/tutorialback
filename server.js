const express = require('express');
const handleError = require('./middleware/error');

const server = express();

server.use(handleError);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
