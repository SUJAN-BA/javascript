let b=document.getElementById("id");

b.addEventListener("click", ()=>{
    alert("succesfully clicked");
    document.querySelector(".box").innerHTML="get clicked";
})

b.addEventListener("contextmenu",()=>{
   alert("dont  right click");
})