var fs = require('fs');
var content = fs.readFileSync('./捐款.txt');
var str = content.toString();
var arr = str.split('\r\n');
var arr1 = [];
for (var i = 0; i < arr.length; i++) {
    arr1[i] = arr[i].split(' ')[1]

}
var sum = 0;
for (var i = 0; i < arr1.length; i++) {
    sum += Number(arr1[i]);
}
console.log(sum);