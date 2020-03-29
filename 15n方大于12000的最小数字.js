var n = 1;
while (true) {
    if (Math.pow(n, 2) > 12000) {
        console.log(n);
        break;
    }
    n++;
}
console.log(n);