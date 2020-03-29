// var n = 6;
// var arr = [];
// while (n--) {
//     var num = parseInt(Math.random() * 33 + 1);
//     if (!arr.includes(num)) {
//         arr.push(num);
//     }
// }
// console.log(arr);


var n = 6;
var arr = [];
while (arr.length < 6) {
    var num = parseInt(Math.random() * 33 + 1);
    if (!arr.includes(num)) {
        arr.push(num);
    }
}
console.log(arr);