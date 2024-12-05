/*  let div=document.createElement("div");
div.innerHTML="**i am sujan suja**";  */

//document.querySelector(".container").append(div);
//document.querySelector(".container").prepend(div);
//document.getElementById("id1").after(div)
//document.getElementById("id1").before(div)


let cont=document.querySelector(".container");
cont.insertAdjacentElement("beforebegin","<b>new div content<b>");


