var  obj  =   {    
    '意大利':  4400,
    '美国':  1107,
    '德国':  115,
    '法国':  1300
};
var arr = [];
for (var k in obj) {
    arr.push({ 'city': k, 'number': obj[k] });
}

arr.sort(function(a, b) {
    return b.number - a.number
})

for (var i = 0; i < arr.length; i++) {
    console.log(`${arr[i].city}:${arr[i].number}`);

}