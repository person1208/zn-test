for (var i = 2; i <= 100; i++) {
    var num = 0;
    for (var j = 1; j <= 100; j++) {
        if (i % j == 0) {
            num++;
        }
    }
    if (num == 2) {
        console.log(i);
    }
}