function sum(a,b,c){
    return a+b+c;
}

let ary=[1,2,3];
console.log(sum(ary[0],ary[1],ary[2]));

console.log(sum(...ary));