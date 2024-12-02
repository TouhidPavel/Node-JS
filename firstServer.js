const http= require('http')

// Create Server
const server = http.createServer((req, res) => {
    res.write('Hello Node JS Developers')
    res.end()
})

// Define the Port and Host
const port = 3000
const hostname = '127.0.0.1'

// Start the Server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})