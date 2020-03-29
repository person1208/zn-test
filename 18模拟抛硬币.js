var z = 0;
var f = 0;
var c = 1000000;
while (c--) {
    var a = Math.random();
    if (a > 0.5) {
        z++;
    } else {
        f++;
    }
}
console.log(z, f);