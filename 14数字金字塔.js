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

// for (var i = 1; i <= 6; i++) {
//     var str = '1';
//     for (var j = 2; j <= i; j++) {
//         str = j + ' ' + str + ' ' + j;
//     }
//     str = ' '.repeat(12 - 2 * i) + str;
//     console.log(str);

// }


for (var i = 1; i <= 6; i++) {
    var str = '';
    str += ' '.repeat(12 - 2 * i);
    for (var j = i; j >= 1; j--) {
        str += j + ' ';

    }
    for (var j = 2; j <= i; j++) {
        str += j + ' ';

    }
    console.log(str);


}
// var arr = [1, 2, 3, 1, 2, 3, 4, 3, 3];
// for (var n = 0; n < arr.length - 1; n++) {
//     for (var i = n + 1; i < arr.length; i++) {
//         if (arr[n] == arr[i]) {
//             arr.splice(n, 1);
//             i--;
//         }
//     }
// }
// console.log(arr);



// var arr = [1, 2, 3, 1, 2, 3, 4, 3, 3];
// var arr1 = [];
// for (var i = 0; i < arr.length; i++) {
//     if (arr1.indexOf(arr[i]) == -1) {
//         arr1.push(arr[i])
//     }
// }
// console.log(arr1);