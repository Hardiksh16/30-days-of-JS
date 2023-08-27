1.// Program to factorize

let Factorize = 1;
let a = prompt("Enter the number to factorize");
a=Number.parseInt(a);
for(let i=1; i<=a; i++) {
    Factorize *= i;
}
 console.log("The factorial of " + a + " is " + Factorize);
 
 
 2.//  Printing marks of student using for loops
 
 let marks = {
     Hardik: 80,
     shubham:65,
     Aakash:43,
     Nitesh:62,
    }
    
    for( let i=0 ; i<Object.keys(marks).length; i++){
           console.log("The marks of " + Object.keys(marks)[i] +"are " + marks[Object.keys(marks)[i]]);
}

3.//  Printing marks of student using for in loops
 for (let key in marks) {
    console.log("The marks of  " + key + " are " + marks[key])
 }


4.//  Writing a program using while loop to take values from users unless & until he enter the correct number

let cn = 8
let i
while(i!=cn){
    i= prompt("Please enter the correct number");
    if (i!=cn){
        console.log(alert("Please Try again"));
    }
}
alert("You have entered the correct number");


5.// Writing a function to find mean of 5 number
 function addavg(a,b,c,d,e){
    return(a+b+c+d+e)/5

 }

let f= 4;
let g= 6;
let h= 7;
let k= 8;
let j= 5;

console.log("The mean of five digit is " + addavg(f,g,h,k,j));


// 6. Writing the same code using arrow function

let mean=(x,y,z,w,u)=>{
    return(x+y+z+w+u)/5
}
console.log("The mean of five digit is " + mean(4,6,8,10,12))