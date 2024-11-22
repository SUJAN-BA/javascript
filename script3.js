var a=1;

var b=3;
//console.log("sum is:"+a+b);
console.log("a:"+a+",b:"+b);

var c="sujan";

console.log(a+" "+c);
console.log(typeof a, typeof c);

/*const x=4;
x=x+1;  not allowed */

//var is globle scope(overwritten)
var x=10;
{
    var x=20;
    console.log(x);
}
console.log(x);

//let is black scope

let y=10;
{
    let y=20;
    console.log(y);
}
console.log(y);

/*let d=1; allowed
d=d+1;
console.log(d);*/

/*var d=1;
d=d+1;
console.log(d);*/