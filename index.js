// require your server and launch it
const express = require('express');
const server = express();

server.listen(5000, () => {
    console.log("Server listening on port 5000")
})