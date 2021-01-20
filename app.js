const http = require('http');

// require is more or less the same as a JS import
// const hostname = '127.0.0.1'; // this is localhost
const port = process.env.PORT || 3000; // localhost:3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('8 dats and counting til the World freakin parties ');
});

server.listen(port, () => {
  console.log(`Server is now running at ${port}/`);
});