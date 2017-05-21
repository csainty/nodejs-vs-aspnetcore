const http = require('http');

const server = http.createServer((req, res) => {
  setTimeout(() => {
    res.statusCode = 200;
    res.end();
  }, 1000);
});
console.log("Listening on 8000");
server.listen(8000);
