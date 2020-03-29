var fs = require('fs');
var content = fs.readFileSync('./数据.txt');
var str = content.toString();
var arr = str.split("\r\n");
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
}
console.log(sum);