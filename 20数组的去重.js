var arr = [1, 1, 1, 1, 3, 3, 3, 2, 2, 2, 1, 2, 3];
var arr1 = [];
for (var i = 0; i < arr.length; i++) {
    if (!arr1.includes(arr[i])) {
        arr1.push(arr[i])
    }
}
console.log(arr1);


// for (var i = 1; i <= 9; i++) {
//     var str = ""
//     for (var j = 1; j <= i; j++) {
//         str += j + '*' + i + '=' + j * i + ' ';
//     }
//     console.log(str);

// }

// var str = '';
// for (var i = 1; i <= 6; i++) {
//     str += i + 'x' + 6 + '=' + i * 6 + ' '
// }
// console.log(str);