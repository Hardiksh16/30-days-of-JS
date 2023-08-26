//1.   Below are the ways to print in Java Script 
//     console.log("Hello Hardik Shetty");  This is used to display something in console
//     alert("you are coding for the first time using Javascript"); This is used as a Popup
//     document.write("Today is 23nd August 2023 & I'm wiriting Java Script for the first time") This is used to write in the page as a document
/*
//2.   Below are some list of Console API
console.log("Hello Hardik Shetty", 40+40," to score in Web Security");

// Used as to show Warning
console.warn("Study Well");
// Used as to show error
console.error("or else you will fail");
*/

//3.   What are variable? Variable are container to store data values
var number1 = 44;
var number2 = 66;
console.log(number1 + number2);

// 4.  Different type of Data Type

// Number
var num1 = 64;
var num2 = 62.4;

// Null

let a = null;

// Symbol

let b = Symbol("This is also a primitive Data Type");

// String
var str1="String is written in double quote";
var str2='String can also be written in single quote';

// booleans
var c=true;
var d=false;


// BigInt

const e = BigInt("634") + BigInt("46");

// Undefined
let f = undefined

console.log(a,b,c,d,e,f);

// Objects

let marks= {
Virat : 100,
Rohit : 75,
Dhoni : 50,

}
 
console.log(num1 + str2,marks);
console.log(marks["Virat"+"Rohit"+"Dhoni"]);



// Var functions was used previously but its use has now been limited because it introduced some bugs as it had the ability to change the values in run time.
// so "let" & "const" functions were introduced 

let g = 4
g= "My name is Hardik Shetty"
console.log(g);

const h = 9;
console.log(h);
// h=8 -> This will show an error becuase u can not re-declare the data type in case of const

// There are two type of data types 1. Primitive Data Type(NNSSBBU) 2. Non-Primitive Data Type(Objects)