let a="sujan";
console.log(a);
console.log("length is:"+a.length);
console.log(a[0]);

//template literals

let b=`sujan`;
let c=`suja`;
console.log(b);
console.log(`my firstname:${b}  my lastname:${c}`);

//escape sentence

let d="sujan\"suja";// try with \n and \t ex:"sujan\nsuja"
console.log(d);

//string method;

let s="sujansuja";

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.slice(0,5));
console.log(s.replace("suja","ba"));
console.log(s.trim());

let s1="sujan";
let s2=" suja";

s3=s1.concat(s2," BA"," shetty");//we can use + also
console.log(s3);


