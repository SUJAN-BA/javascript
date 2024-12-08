async function stop(){
    return new Promise((resolve,reject)=>{
        setInterval(()=>{
      resolve("success")
        },1000)
   })
}

  

(async function main(){
    let a= await stop();
    console.log(a);
    
    
    let b=await stop();
    console.log(b);
    
}) ();


//main() funstion is inovke without calling it such function in js are IIFE


  