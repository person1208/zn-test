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



// var arr = [1030, 56000, 20300040, 20, 8933, 28001020];
// for (var i = 0; i < arr.length - 1; i++) {
//     for (var j = 0; j < arr.length - 1 - i; j++) {
//         if (calcZero(arr[j]) > calcZero(arr[j + 1])) {
//             var temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;

//         }
//     }

// }
// console.log(arr);

var arr = [1030, 56000, 20300040, 20, 8933, 28001020];
arr.sort(function(a, b) {
    return calcZero(a) - calcZero(b);
});
console.log(arr);