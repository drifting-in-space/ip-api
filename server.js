const http = require('http');

const HOSTNAME = '0.0.0.0';
const PORT = parseInt(process.env.PORT || 8080);

process.on('SIGINT', process.exit);
process.on('SIGTERM', process.exit);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  console.log(`Returning result to ${req.socket.remoteAddress}`)

  res.end(req.socket.remoteAddress);
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});