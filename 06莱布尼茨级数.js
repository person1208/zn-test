// var n = 20;
// var total = 1;
// var fenzi = 1;
// var fenmu = 1;
// for (var i = 1; i <= n; i++) {
//     total += ((fenzi *= i) / (fenmu *= (2 * i + 1)));
// }
// var num = total * 2;
// console.log(num);



var n = 200000;
var sum = 1;
var total = 1;
for (let i = 1; i <= n; i++) {
    sum *= i / (2 * i + 1);
    total += sum;
}
console.log(total * 2);



var n = 200000;
var sum = 1;
var total = 0;
for (var i = 1; i <= n; i++) {
    sum *= (i / (2 * i + 1));
    total += sum;
}
console.log((total + 1) * 2);