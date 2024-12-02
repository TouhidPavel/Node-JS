const http= require('http')

// Create Server
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('This is Home Page')
        res.end()
    } else if (req.url === '/about') {
        res.write('This is About Page')
        res.end()
    } else if (req.url === '/contact') {
        res.write('This is Contact Page')
        res.end()
    } else {
        res.write('Not Found')
        res.end()
    }
})

// Define the Port and Host
const port = 3000
const hostname = '127.0.0.1'

// Start the Server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})