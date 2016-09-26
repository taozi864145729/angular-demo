var path = require('path');


var ss = __dirname.split('\\').slice(0,__dirname.split('\\').length-1);
console.log(ss.join('\\'));
console.log(ss.join('\\') + '\\webpack.config.js');

console.log(path.join(__dirname, '../webpack.config.js'));