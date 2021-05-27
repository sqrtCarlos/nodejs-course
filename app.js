// npm - global command, comes with node
// npm --version


// local dependency - user it only in this particular project
// npm i <packageName>

// global dependency - use it in any project 
// npm install -g <packageName>
// sudo npm install -g <packageName> (linux or mac)

// package.json - manifest file (stores important info about project/package)
// manual aproach (create package.json in the rootCertificates, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everythin default)

const _ = require('lodash');

const items = [1, [2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);