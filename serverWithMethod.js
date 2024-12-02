const http = require('http')

// Create the HTTP serverWithMethod
const serverWithMethod = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type' : 'text/plain',
            'X-Author' : 'Touhiduzzaman Pavel'
        })
        res.write('Welcome to the Home Page')
        res.end()
    } else if (req.url === '/about' && req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type' : 'text/plain',
            'X-Author' : 'Touhiduzzaman Pavel'
        })
        res.write('This is About Page')
        res.end()
    } else if (req.url === '/contact' && req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type' : 'text/plain',
            'X-Author' : 'Touhiduzzaman Pavel'
        })
        res.write('This is Contact Page')
        res.end()
    } else {
        res.writeHead(404, {
            'Content-Type' : 'text/plain',
            'X-Author' : 'Touhiduzzaman Pavel'
        })
        res.write('404 Not Found')
        res.end()
    }
})

// Define Port and Host
const port = 3000
const hostname = '127.0.0.1'

// Start the Server
serverWithMethod.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}`)
})
