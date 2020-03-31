var fs = require('fs');
var str = fs.readFileSync('./考试成绩.txt').toString();
var arr = str.split('\r\n');
var yuwenArr = [];
var shuxueArr = [];
var yingyuArr = [];
for (var i = 0; i < arr.length; i++) {
    var _arr = arr[i].split(' ');
    if (_arr[3] > 60) {
        yuwenArr.push(_arr[3]);
    }
    if (_arr[5] > 60) {
        shuxueArr.push(_arr[5]);
    }
    if (_arr[7] > 60) {
        yingyuArr.push(_arr[7]);
    }

}
console.log('语文及格率：' + Math.round(yuwenArr.length / arr.length * 1000) / 10 + '%');
console.log('数学及格率：' + Math.round(shuxueArr.length / arr.length * 1000) / 10 + '%');
console.log('英语及格率：' + Math.round(yingyuArr.length / arr.length * 1000) / 10 + '%');