//let x,y=[1,2];


//let [x, y]=[1,2,3];

let [x,y,...rest]=[1,2,7,8,9,10]
console.log(x,y,rest);

let obj={
    a:1,
    b:2
}

//console.log(obj.a,obj.b);

let {a,b}=obj;
console.log(a,b);