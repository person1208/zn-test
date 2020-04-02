// for (var i = 101; i <= 999; i++) {
//     var g = i % 10;
//     var s = parseInt(i / 10) % 10;
//     var b = parseInt(i / 100);
//     var sxh = Math.pow(g, 3) + Math.pow(s, 3) + Math.pow(b, 3);
//     if (i == sxh) {
//         console.log(i);
//     }
// }

function shuixianhua(i) {
    var g = i % 10;
    var s = parseInt(i / 10) % 10;
    var b = parseInt(i / 100);
    // var sxh = Math.pow(g, 3) + Math.pow(s, 3) + Math.pow(b, 3);
    // if (i == sxh) {
    //     console.log(i);
    // }
    return lifanghe(g) + lifanghe(s) + lifanghe(b);
}

function lifanghe(a) {
    return Math.pow(a, 3)
}

for (var i = 100; i <= 999; i++) {
    if (shuixianhua(i) == i) {
        console.log(i);

    }
}