// for (var i = 1; i <= 10000; i++) {
//     var sum = 0
//     for (var j = 1; j < i; j++) {
//         if (i % j == 0) {
//             sum += j;
//         }
//     }
//     if (i == sum) {
//         console.log(i);

//     }
// }

function wanmeishu(i) {
    var sum = 0
    for (var j = 1; j < i; j++) {
        if (i % j == 0) {
            sum += j;
        }
    }
    return sum;
}
for (var i = 1; i <= 10000; i++) {

    if (wanmeishu(i) == i) {
        console.log(i);

    }
}