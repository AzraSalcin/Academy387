const http = require('http');
const fs = require("fs");

const hostname = '127.0.0.1';
const port = 1337;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  fs.readFileSync("index.html", "utf8", (err, data) => {
	  res.end(data);
  })
  //res.end();
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});