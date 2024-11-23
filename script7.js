function myname  (name){
    console.log("my name is "+name);
}

myname("sujan");

function sum (a,b,c=1){
    return a+b+c;
}

console.log("sum1:"+sum(1,2));
console.log("sum2:"+sum(1,2,3));

//Arrow function

const add =(a,b)=>{
    return a+b;
}

console.log("result:"+add(1,1));