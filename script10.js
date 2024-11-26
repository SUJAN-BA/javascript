let ary=[1,2,3,4];

let obj={
  a:1,
  b:2,
  c:3,
  d:4
}

for(let key in obj){
    let ele=obj[key];
    console.log(ele);
}

for(let value of ary){
    console.log(value);
}

//forEach loop
ary.forEach((value,idx,a)=>{
    console.log(value,idx,a);
})


//map()

//find the exponenetial of given ary

let newary=ary.map((value,idx,ary)=>{
    return (value**2);
})

console.log(newary);


//filter()

let greater=(value)=>{
    if(value>2){
        return true;
    }
    else{
        return false;
    }
}

console.log(newary.filter(greater));

//reduce()

let sum=(a,b)=>{
    return a+b;
}

console.log(newary.reduce(sum));

//Array.form

console.log(Array.from("sujan"));