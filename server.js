const http = require('http');

const server=http.createServer((req, res) => {
    res.write(req.url)
    res.end();
})
server.listen(3000, console.log('   server is running at http://localhost:3000/'));