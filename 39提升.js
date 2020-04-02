var m = true;

function fun() {
    if (m) {
        console.log('啦啦啦，我没有执行哦，if进不来哦') ;    
        var m = 6;
    }
    console.log(m);
}
fun(); //undefined