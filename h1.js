var fs = require("fs");

var data = fs.readFileSync('C:/Users/Mloong/AppData/Roaming/npm/node_modules/express/package.json');

console.log(data.toString());
console.log("程序执行结束!");