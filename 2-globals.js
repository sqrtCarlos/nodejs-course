// GLOBALS 

// __dirname - path to current directoy
// __filename - file name 
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

console.log(__dirname)
console.log(__filename)
setInterval(() => {
    console.log('Hello world')
}, 1000)