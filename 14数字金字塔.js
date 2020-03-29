// for (var i = 1; i <= 6; i++) {
//     var str = "1";
//     for (var j = 2; j <= i; j++) {
//         str = j + ' ' + str + ' ' + j;
//     }
//     str = ' '.repeat(12 - 2 * i) + str;
//     console.log(str);
// }


// for (var i = 1; i <= 6; i++) {
//     var str = '';
//     str += ' '.repeat(12 - 2 * i);
//     for (var j = i; j >= 1; j--) {
//         str += j + ' ';
//     }
//     for (var j = 2; j <= i; j++) {
//         str += j + ' ';
//     }
//     console.log(str);

// }

for (var i = 1; i <= 6; i++) {
    var str = '1';
    for (var j = 2; j <= i; j++) {
        str = j + ' ' + str + ' ' + j;
    }
    str = ' '.repeat(12 - 2 * i) + str;
    console.log(str);

}