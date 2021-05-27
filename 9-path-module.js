const path = require('path')

// show the default separator
console.log(path.sep);

// create a file path with the correct syntax
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath);

// return the last part of a file path as the unix command basename
const base = path.basename(filePath)
console.log(base);

// return an absolute path. Accepts a sequence of paths or path segments and resolves it into an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);