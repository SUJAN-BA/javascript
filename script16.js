
document.querySelector(".c1");
// output  :-<div class=​"c1 c2 c3">​…​</div>​

document.querySelector(".c1").classList;

document.querySelector(".c1").classList.add("c4");
undefined
document.querySelector(".c1").classList.remove("c4");
undefined


document.querySelector(".c1").classList.toggle("green");
false
document.querySelector(".c1").classList.toggle("green");
true