/* run the below program in inspect console*/

document.querySelector(".box");
'<div class="box">i am sujan</div>'//output


document.querySelector(".box").innerHTML;
'i am sujan'

document.querySelector(".box").innerText;
'i am sujan'

document.querySelector(".box").textContent;
'i am sujan'

document.querySelector(".box").outerHTML;
'<div class="box">i am sujan</div>'

document.querySelector(".box").innerHTML="i am sujansuja";
'i am sujansuja'


//attributes

document.querySelector(".box").hasAttribute("class");
true
    document.querySelector(".box").hasAttribute("style");
false
    document.querySelector(".box").getAttribute("class");
'box'
    document.querySelector(".box").setAttribute("style","display:flex");
undefined
    document.querySelector(".box").hasAttribute("style");
true

    document.querySelector(".box").removeAttribute("style");
undefined

    document.querySelector(".box").attributes;
