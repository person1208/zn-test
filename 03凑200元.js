// var num = 0;
// for (var y = 0; y <= 200; y++) {
//     for (var e = 0; e <= 100; e++) {
//         for (var w = 0; w <= 40; w++) {
//             if (y + e * 2 + w * 5 == 200) {
//                 console.log(`${y}个一元，${e}个两元，${w}个五元`);
//                 num++;
//             }
//         }
//     }
// }
// console.log(num);

var n = 0;
for (var y = 0; y <= 200; y++) {
    for (var e = 0; e <= 100; e++) {
        for (var w = 0; w <= 40; w++) {
            if (y + e * 2 + w * 5 == 200) {
                console.log(y, e, w);
                n++;
            }
        }
    }
}
console.log(n);