let  p1=new Promise((resolve,reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("random number not supporting you");
    }
    else{
        setInterval(()=>{
            console.log("i am done 1");
            resolve("success")
        },3000);
    }
})


/*p.then((a)=>{
    console.log(a);
}).catch(b=>{
    console.log(b);
})  */

    let  p2=new Promise((resolve,reject)=>{
        let a=Math.random();
        if(a<0.5){
            reject(" 2 random number not supporting you");
        }
        else{
            setInterval(()=>{
                console.log("i am done 2");
                resolve("success2")
            },3000);
        }
    })
    

    let p3=Promise.allSettled([p1,p2])

    p3.then((a)=>{
        console.log(a);
    }).catch(b=>{
        console.log(b);
    })  