console.log("normal for loop....");

for(int i=0;i,5;i++){
      console.log(i);
}

let obj={
    name:"abc",
    age:19,

}

console.log("for in loop...")

for(let key in obj){
    let ele=obj[key];
    console.log("key:"+key,"value:"+ele);
}

console.log("for of loop..");

for(let c of "sujan"){
    console.log(c);
}

console.log("while loop...");

let i=1;
while(i<5){
    console.log(i);
    i++;
}

console.log("do-while loop...")

 i=1;
do{
    console.log(i);
    i++;
}
while(i<5);
