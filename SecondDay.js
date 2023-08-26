console.log("Operators in JS")

// 1. Arithmetic Operator
let i = 10;
let j = 4;

console.log("i+j=", i + j);
console.log("i-j=", i - j);
console.log("i*j=", i * j);
console.log("i/j=", i / j);
console.log("i**j=", i ** j);
console.log("i%j=", i % j);
console.log("i++=", i++);
console.log("++i=", ++i);
console.log("++i=", ++i);
console.log("i--=", i--);
console.log("--i=", --i);
console.log("i++=", i++);
console.log("i=", i);
console.log("i--=", i--); 

// 2. Assignment Operator
let k = 10;
k+= 5;
console.log("k=k+=5",k)
// ("same as k=k + 5"); 15; 
k-= 5;
console.log("k=k-= 5",k)
// ("same as k= k-= 5");  10;
k*= 5;
console.log("k=k*= 5",k)
// ("same as k=k*= 5"); 50;
k/= 5;
console.log("k= k /= 5",k )
// ("same as k=k/= 5"); 10;
k%= 5;
console.log("k=k%= 5",k)
// ("same as k=k"); 0;
k**= 5;
console.log("k=k**= 5",k)
// ("same as k=k**= 5"); 1,00,000;

/*
// Conditional Statement
let l= prompt("Please enter your Age");
l = Number.parseInt(l);

 if (l>18 && l<55){
alert("You are validated to Drive");    
}
else if(l<=8){
alert("Continue driving your remote control Car")
}
else if(l<=0){
    alert("Please enter a valid Age")
    }
else if(l>8 && l<=14){
    alert("Kindly focus on your academics")
    }
else if(l>18 && l>=55){
    alert("Please enjoy your retirement Life")
    }
else{
    alert("Ask Dad to gift you a bicycle");
}
*/
// Switch Statement
const expr = prompt("Which is your Favourite Sport");;
switch(expr) {
    case"Cricket":
 console.log(alert("India is the best team"));
 break;
    case"Football":
 console.log(alert("Argentina is the best team"));
 break;
    case"Basketball":
 console.log(alert("USA is the best team"));
 break;
    case"Badmintion":
 console.log(alert("Indonesia is the best team"));
 break;
    case"Hockey":
 console.log(alert("Australia is the best team"));
 break;
default:
    console.log(alert("Your sport is not worth playing"));
}
console.log(alert("Is there anything else you'd like?"));

// Ternary operator
console.log("You Can", l>=18? "Drive":"not Drive");
