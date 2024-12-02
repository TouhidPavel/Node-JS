const fs = require('fs')

// Read a File: fs.readFile(path, options, callback(err, data))
const filePath = 'demo.txt'
fs.readFile(filePath, (err, data) => {
    if (err) {
        console.log('Error Reading the File:', err)
    } else {
        console.log('File Content:', data.toString())
    }
})



// Write to a File: fs.writeFile(file, data, options, callback(err))
const filePath = 'demo.txt'
const data = 'Node JS Just Awesome.'
fs.writeFile(filePath, data, (err) => {
    if (err) {
        console.log('Error Writing to the File:', err)
    } else {
        console.log('File written successfully!')
    }
})



// Append Data to a File: fs.appendFile(path, data, options, callback(err))
const filePath = 'demo.txt'
const dataToAppend = 'Hello Programmers. Welcome to the Node JS Program'
fs.appendFile(filePath, dataToAppend, (err) => {
    if (err) {
        console.log('Error Appending to the File:', err)
    } else {
        console.log('Data Successfully Appended to File!')
    }
})



// Rename a File: fs.rename(oldPath, newPath, callback(err))
const oldName = 'demo.txt'
const newName = 'demo.txt'
fs.rename(oldName, newName, (err) => {
    if (err) {
        console.log('Error Renaming the Directory:', err)
    } else {
        console.log('File Successfully Renamed!')
    }
})



// Delete a File: fs.unlink(path, callback(err))
const filePath = 'demo.txt'
fs.unlink(filePath, (err) => {
    if (err) {
        console.log('Error Deleting the File:', err)
    } else {
        console.log('File Successfully Deleted!')
    }
})



// Check if a File Exists: fs.access(path, mode, callback(err))
const filePath = 'demo.txt'
fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
        console.log('No Such File or Directory')
    } else {
        console.log('File Exists!')
    }
})



// Creating a Directory: fs.mkdir(path, [options], callback(err))
const dirPath = 'new-directory'
fs.mkdir(dirPath, (err) => {
    if (err) {
        console.log('Error Creating Directory:', err)
    } else {
        console.log('Directory Created Successfully!')
    }
})



// Reading a Directory: fs.readdir(path, [options], callback(err, files))
fs.readdir('new-directory', (err, files) => {
    if (err) {
        console.log('Error Reading Directory:', err)
    } else {
        console.log('Files in Directory:', files)
    }
})



// Rename a Directory: fs.rename(oldPath, newPath, callback(err))
const oldDir = 'new-directory'
const newDir = 'renamed-directory'
fs.rename(oldDir, newDir, (err) => {
    if (err) {
        console.log('Error Renaming Directory:', err)
    } else {
        console.log('Directory Successfully Renamed!')
    }
})



// Deleting a Directory: fs.rmdir(path, [options], callback(err))
fs.rmdir('new-directory', (err) => {
    if (err) {
        console.log('Error Deleting Directory:', err)
    } else {
        console.log('Directory Deleted Successfully!')
    }
})



// Deleting a Directory with Content: fs.rm(path, [options], callback(err))
fs.rm('new-directory', { recursive: true, force: true }, (err) => {
    if (err) {
        console.log('Error Deleting Directory:', err)
    } else {
        console.log('Directory Delete with Content Successfully!')
    }
})



// Checking if a Directory Exists: fs.stat(path, callback(err, stats))
fs.stat('new-directory', (err, stats) => {
    if (err) {
        console.log('Error Getting File Stats:', err)
    } else if (stats.isDirectory()) {
        console.log('Directory Exist!')
    }
})