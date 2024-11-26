let a=[4,1,3,2];
console.log(a);
console.log(a.length);
console.log("type of array:"+typeof a);

let n=[1,"sujan",true];
console.log(n);

console.log(a[0]);

a[0]=0;
console.log(a);

//array methods 

let ary=[1,"sujan","suja","BA"];
console.log(ary.toString());
console.log(ary.join(" and "));

console.log(ary.pop());
console.log("after pop:"+ary);

console.log(ary.push("BA"));
console.log("after push:"+ary);

console.log(ary.shift());
console.log("after shift:"+ary);

console.log(ary.unshift(1));
console.log("after unshift:"+ary);

console.log(delete ary[0]);

console.log(a.sort());

console.log(ary.slice(2,4));

console.log(ary.splice(1,2,22,33));
console.log("after splice:"+ary);

console.log(a.reverse());


let a1=[1,2,3];
let a2=[4,5,6];
let a3=[7,8,9];

let a4=a1.concat(a2,a3);

console.log(a4);
