/*let cont=document.body.firstElementChild;
cont.children[2].style.backgroundColor="green";*/

/*let boxes=document.getElementsByClassName("box")
console.log(boxes);
boxes[2].style .backgroundColor="green";// we have to color box3  */

/*let boxes=document.getElementById("boxid");
boxes.style.backgroundColor="green";   */

 /*let boxes=document.querySelector(".box");
boxes.style.backgroundColor="green"; */

let a=document.querySelectorAll(".box");
console.log(a);

a.forEach((value)=>{
    value.style .backgroundColor="green";
})


document.getElementsByTagName("div");// inspect this and run in console