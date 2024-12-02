// Import Required Modules
const http = require('http')
const fs = require('fs')
const path = require('path')

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
    let filePath
    if (req.url === '/') {
        filePath = path.join('views', 'index.html')
    } else if (req.url === '/about') {
        filePath = path.join('views', 'about.html')
    } else if (req.url === '/contact') {
        filePath = path.join('views', 'contact.html')
    } else {
        filePath = path.join('views', '404.html')
    }

    // Read the File and Send the response
    fs.readFile(filePath, (err, data) => {
        if (err) {
            handleResponse(res, 500, 'Error reading the file')
        } else {
            handleResponse(res, 200,  data)
        }
    })
}

// Send the Response to the Client
const handleResponse = (res, statusCode, data) => {
    res.writeHead(statusCode, {
        'Content-Type' : 'text/html',
        'X-Author' : 'Touhiduzzaman Pavel'
    })
    res.write(data)
    res.end()
}

// Start the Server
createServer()