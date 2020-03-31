var fs = require('fs');
var content = fs.readFileSync('./公司数据.txt');
var str = content.toString();
var arr = str.split('\r\n\r\n');
for (var i = 0; i < arr.length; i++) {
    var arr1 = arr[i].split('\r\n');
    fs.appendFileSync('./给老板的数据.txt', arr1[0] + '  ' + arr1[3] + '\r\n');

}