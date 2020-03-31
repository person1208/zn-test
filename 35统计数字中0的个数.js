function calcZero(n) {
    var str = n.toString();
    var num = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == 0) {
            num++;
        }
    }
    return num;
}
console.log(calcZero(4080));