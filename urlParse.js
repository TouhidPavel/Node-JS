const http = require('http')
const url = require('url')

const server = http.createServer((req, res)=> {
    const parseURL = url.parse(req.url, true)
    if (parseURL.pathname === '/') {
        res.writeHead(200, {'Content-Type' : 'text/plain'})
        res.write('Welcome to the Home Page')
        res.end()
    } else if (parseURL.pathname === '/home') {
        res.writeHead(200, {'Content-Type' : 'text/plain'})
        res.write('Welcome to the Home Page')
        res.end()
    } else if (parseURL.pathname === '/about') {
        res.writeHead(200, {'Content-Type' : 'text/plain'})
        res.write('This is About Page')
        res.end()
    } else if (parseURL.pathname === '/contact') {
        res.writeHead(200, {'Content-Type' : 'text/plain'})
        res.write('This is Contact Page')
        res.end()
    } else {
        res.writeHead(404, {'Content-Type' : 'text/plain'})
        res.write('404 Not Found')
        res.end()
    }
})


const port = 3000
const hostname = '127.0.0.1'
server.listen(port, hostname, ()=> {
    console.log(`Server running at http://${hostname}:${port}`)
})