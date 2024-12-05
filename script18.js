document.querySelector(".child").addEventListener("click",(e)=>{
    e.stopPropagation();
    alert("child is clicked");
})


document.querySelector(".childcontainer").addEventListener("click",(e)=>{
    alert("childcontainer is clicked");
})

document.querySelector(".container").addEventListener("click",(e)=>{
    
    alert("container is clicked");
})

function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()* 255);
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

/*let a=setInterval(()=>{
    document.querySelector(".childcontainer").style .backgroundColor=getRandomColor();
},1000)

console.log(a);*/


let a=setInterval(()=>{
    document.querySelector(".childcontainer").style .backgroundColor=getRandomColor();
},5000 )

console.log(a);