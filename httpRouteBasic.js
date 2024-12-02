// Import the HTTP Module
const http = require('http')

// Create and Start the Server
const createServer = () => {
    const PORT = 3000
    const hostName = '127.0.0.1'
    const server = http.createServer(handleReqRes)
    server.listen(PORT, hostName, () => {
        console.log(`Server Running at http://${hostName}:${PORT}`)
    })
}

// Handle Incoming Requests and Respond
const handleReqRes = (req, res) => {
    if (req.url === '/') {
        handleResponse(res, 200, 'Welcome to the Home Page')
    } else if (req.url === '/about') {
        handleResponse(res, 200, 'This is About Page')
    } else if (req.url === '/contact') {
        handleResponse(res, 200, 'This is Contact Page')
    } else {
        handleResponse(res, 404, '404 - Not Found')
    }
}

// Handle the Response
const handleResponse = (res, statusCode, data) => {
    res.writeHead(statusCode, {
        'Content-Type' : 'text/plain',
        'X-Author' : 'Touhiduzzaman Pavel'
    })
    res.write(data)
    res.end()
}

// Start the Server
createServer()