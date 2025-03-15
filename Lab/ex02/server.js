const http = require('http'); // NodeJS

const hostname = '127.0.0.1'; // localhosst
const port = 3000; // 

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'tsext/plain');
    res.end('Hello word\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

