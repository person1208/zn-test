// var total = 1;
// for (var i = 1; i <= 5; i++) {
//     total *= i;
// }
// console.log(total);

var total = 0;
for (var i = 1; i <= 9; i++) {
    var num = 1;
    for (var j = 1; j <= i; j++) {
        num *= j;
    }
    total += num;
}
console.log(total);