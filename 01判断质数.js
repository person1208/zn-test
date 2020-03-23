// var num = 0;
// for (var i = 1; i <= 45887; i++) {
//     if (458877 % i == 0) {
//         num++;
//     }
// }
// if (num == 2) {
//     console.log('是质数');

// }

var n = 45887;
var num = 0;
for (var i = 1; i <= n; i++) {
    if (n % i == 0) {
        num++;
    }
}
if (num == 2) {
    console.log('是质数');
} else {
    console.log('不是质数');

}