var str = '0';
var num = 5;
var bool = false;
var undef;
var n = null;

var arr = [str, num, bool, undef, n];

console.log(arr);

for(var i = 0; i < arr.length; i++){
    console.log(i);
}

console.log(arr.keys());