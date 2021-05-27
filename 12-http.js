const http = require('http');

const server = http.createServer((req, resp) => {
    if (req.url === '/') {
        resp.end('Welcome to our home page')
    } else if (req.url === '/about') {
        resp.end('Welcome to our about page')
    } else {
    resp.end(`
    <title>Oops!</title>
    <h1>Oops!</h1>
    <p>We cant't seem to fin the page you are loking for</p>
    <h2>Puto el que lo lea</h2>
    <a href="/">Back home</a>
    `)
    }
})

server.listen(5000)