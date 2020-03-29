var c = 0;
var str = " ";
for (var i = 100; i <= 1000; i++) {
    if (i % 5 == 0 && i % 6 == 0) {
        c++;
        str += i + ' ';
        if (c % 10 == 0) {
            console.log(str);
            str = " ";
        }

    }
}