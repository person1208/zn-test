function checkzhishu(a) {
    for (var i = 2; i < a; i++) {
        if (a % i == 0) {
            return false;
        }
    }
    return true;
}

function checkhuiwen(a) {
    var str = a.toString();
    for (var i = 0; i < str.length; i++) {
        if (str[i] != str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}


var count = 0;
var a = 2;
var str = " ";
while (count < 100) {
    if (checkhuiwen(a) && checkzhishu(a)) {
        str += a + '\t';
        count++;
        if (count % 10 == 0) {
            console.log(str);
            str = '';
        }
    }
    a++;
}
console.log(str);



// for (var i = 2; i <= 1000; i++) {
//     if (checkhuiwen(i) && checkzhishu(i)) {
//         console.log(i);

//     }
// }