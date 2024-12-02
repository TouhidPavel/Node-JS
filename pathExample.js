const path = require('path')

const filePath = path.join('folder', 'subfolder', 'test.txt')
console.log(filePath)

const absolutePath = path.resolve('folder', 'subfolder', 'test.txt')
console.log(absolutePath)

const fileName = path.basename('/folder/subfolder/file.txt')
console.log(fileName)

const dirName = path.dirname('/folder/subfolder/file.txt')
console.log(dirName)

const extensionName = path.extname('/folder/subfolder/file.txt')
console.log(extensionName)

const parseName = path.parse('/folder/subfolder/file.txt')
console.log(parseName)