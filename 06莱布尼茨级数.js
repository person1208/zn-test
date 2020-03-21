var n = 9;
var total = 1;
var fenzi = 1;
var fenmu = 1;
for (var i = 1; i <= n; i++) {
    total += ((fenzi *= i) / (fenmu *= (2 * i + 1)));
}
var num = total * 2;
console.log(num);