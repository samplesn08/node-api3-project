// require your server and launch it
const server = require('./api/server');

server.listen(5000, () => {
    console.log("Server listening on port 5000")
})