const http = require('http');

const port = 3000;

function handleRequest(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Updated \n');
}

const server = http.createServer(handleRequest);

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = { handleRequest };
