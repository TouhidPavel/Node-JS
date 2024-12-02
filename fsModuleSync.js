const fs = require('fs')

// Read a File: fs.readFileSync(path, [options])
const filePath = 'demo.txt'
try {
    const data = fs.readFileSync(filePath, 'utf8')
    console.log('File Content:', data);
} catch (err) {
    console.log('Error Reading the File:', err);
}



// Write to a File: fs.writeFileSync(file, data, [options])
const filePath = 'demo.txt'
const dataToWrite = 'Node JS Just Awesome.'
try {
    fs.writeFileSync(filePath, dataToWrite)
    console.log('File Written Successfully!')
} catch (err) {
    console.log('Error Writing to the File:', err)
}



// Append Data to a File: fs.appendFileSync(path, data, [options])
const filePath = 'demo.txt'
const dataToAppend = 'Hello Programmers. Welcome to the node.js Program.'
try {
    fs.appendFileSync(filePath, dataToAppend)
    console.log('Data Successfully Appended to File!')
} catch (err) {
    console.log('Error Appending to the File:', err)
}



// Rename a File: fs.renameSync(oldPath, newPath)
const oldName = 'demo.txt'
const newName = 'demo.txt'
try {
    fs.renameSync(oldName, newName)
    console.log('File Successfully Renamed!')
} catch (err) {
    console.log('Error Renaming the Directory:', err)
}



// Delete a File: fs.unlinkSync(path)
const filePath = 'demo.txt'
try {
    fs.unlinkSync(filePath)
    console.log('File Successfully Deleted!')
} catch (err) {
    console.log('Error Deleting the File:', err)
}



// Check if a File Exists: fs.accessSync(path, [mode])
const filePath = 'demo.txt'
try {
    fs.accessSync(filePath, fs.constants.F_OK)
    console.log('File Exists!')
} catch (err) {
    console.log('Error Accessing the File:', err)
}



// Creating a Directory: fs.mkdirSync(path, [options])
try {
    fs.mkdirSync('new-directory')
    console.log('Directory Created Successfully!')
} catch (err) {
    console.log('Error Creating Directory:', err)
}



// Reading a Directory: fs.readdirSync(path, [options])
try {
    const files = fs.readdirSync('.')
    console.log('Files in Directory:', files)
} catch (err) {
    console.log('Error Reading Directory:', err)
}



// Rename a Directory: fs.renameSync(oldPath, newPath)
const oldDir = 'new-directory'
const newDir = 'renamed-directory'
try {
    fs.renameSync(oldDir, newDir)
    console.log('Directory Successfully Renamed!')
} catch (err) {
    console.log('Error Renaming Directory:', err)
}



// Deleting a Directory: fs.rmdirSync(path, [options])
try {
    fs.rmdirSync('directory')
    console.log('Directory Deleted Successfully!')
} catch (err) {
    console.log('Error Deleting Directory:', err)
}



// Deleting a Directory with Content: fs.rmSync(path, [options])
try {
    fs.rmSync('directory', {recursive: true, force: true})
    console.log('Directory Delete with Content Successfully!')
} catch (err) {
    console.log('Error Deleting Directory:', err)
}



// Checking if a Directory Exists: fs.statSync(path, [options])
try {
    const stats = fs.statSync('directory')
    if (stats.isDirectory()) {
        console.log('Directory Exist!')
    }
} catch (err) {
    console.log('Error Getting File Stats:', err)
}