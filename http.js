const http = require('http');

http.createServer(((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello World</h1>');
    res.end();
})).listen(3000);

