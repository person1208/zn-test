var str = "2";
var total = 0;
for (var i = 2; i <= 9; i++) {
    str += 2;
    console.log(str);
    total += Number(str);
}
console.log(total);