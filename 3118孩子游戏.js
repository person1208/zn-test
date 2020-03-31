var arr = [];
for (i = 1; i <= 18; i++) {
    arr.push(i);
}
console.log(arr);

var a = 1;
while (arr.length > 1) {
    for (var i = 0; i < arr.length; i++) {
        if (a % 3 == 0) {
            arr.splice(i, 1);
            i--;
        }
        a++;
    }
    console.log(arr);
}