// function fun(a) {
//     return function(b) {
//         if (a > b) {
//             console.log('体温正常');

//         } else {
//             console.log('温度偏高');

//         }
//     }
// }
// var biaozhun1 = fun(37.0);
// biaozhun1(36.5);
// biaozhun1(38.0);

// var biaozhun2 = fun(37.4);
// biaozhun2(37);
// biaozhun2(38.0);

function fun() {
    var a = 10;
    return {
        funA: function() {
            console.log(a);

        },
        add: function() {
            a++;
        }
    }
}
var inn = fun();
inn.funA();
inn.add();
inn.funA();