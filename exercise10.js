let rand=Math.random();
let first,second,third;

//first word
if(rand<0.33){
  first="crazy";
}
else if(rand>0.66 && rand<0.8){
  first="Amazing";
}
else{
  first="Fire";
}

//second word
 rand=Math.random();
if(rand<0.33){
  second="Engine";
}
else if(rand>0.66 && rand<0.8){
  second="Foods";
}
else{
  second="Garments";
}

//third word
 rand=Math.random();
if(rand<0.33){
  third="Bros";
}
else if(rand>0.66 && rand<0.33){
  third="Limited";
}
else{
  third="Hub";
}

console.log(`${first} ${second} ${third}`);