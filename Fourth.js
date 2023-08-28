// Strings

let name = "Hardik Shetty"
console.log(name.length)
console.log(name[0])
console.log(name[1])
console.log(name.toLowerCase())
console.log(name.toUpperCase())
console.log(name.slice(4,9))
console.log(name.slice(7))

let name1= "Mr. Shetty"
console.log(name.concat(name1))
console.log(name + name1)
console.log(name.replace("Hardik","Handsome"))

let name2 = "        Shetty    "
console.log(name2.trim())

// Template Literal
 let student1 = `karthik`
 let student2 = `Sarthak`
 
 let line = `${student1} & ${student2} are best friend`
 console.log(line);

//  Escape Sequence Character

let FirstName =('Martin\'\r Da Silva')
console.log(FirstName)

// Printing strings using for loop
let a= "Hardik";

for (i=0 ; i<a.length; i++){
    console.log(a[i])
}


