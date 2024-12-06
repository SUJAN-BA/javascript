let a=prompt("enter the number");
let b=prompt("enter the number");

sum=parseInt(a)+parseInt(b);

if (isNaN(a) || isNaN(b)){
    throw SyntaxError("this is not allowed");
}


//console.log("sum is "+sum);
//let x=1;

function main() {
try{
    console.log("sum is "+sum*x);
    return true;
}
catch(error){
    console.log("error accuring..");
    return false;
}
    finally{
    console.log("execution terminated");
    }

}

main();