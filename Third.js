// Program to factorize

 let Factorize = 1;
 let a = prompt("Enter the number to factorize");
 a=Number.parseInt(a);
 for(let i=1; i<=a; i++) {
 Factorize *= i;
 }
 console.log("The factorial of " + a + " is " + Factorize);
