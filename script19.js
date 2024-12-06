async function getdata(){ /* try without asynch we get same output */
    return new Promise((resolve,reject)=>{
        setInterval(()=>{
           resolve(455)
        },3000);
    })
}

async function main(){

console.log("losing module");

console.log("do some thing");

let data= await getdata();// wait js the until promise settel and return the value

console.log(data);

console.log("lod data");
console.log("process data")
}

main();