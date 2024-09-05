// Write a TypeScript function to authenticate a user using 
// a username and password. The function should take a username
//  and password as input, and return a 
// boolean indicating whether the authentication was successful.
function verify(name:string, password:string):boolean{
    const users = [
        {name:"Aminah", password:"1234"}
    ]
    const user = users.find((user)=>user.name===name)//users.find((user)=>{user.name===name})
    if(user && user.password ===password){//(()=>{})
        return true
    }else{
        return false
    }
    
    }
    console.log(verify("Aminah","1234"))

//CALCULATOR SWITCH CASE

function calculator(num1:number , num2:number , operators:string){
    switch(operators){
        case "+":
        console.log(num1 + num2);
        break;
        case "-":
        console.log(num1 - num2);
        break;
        case "*":
        console.log(num1 * num2);
        break;
        
        case '/':
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        throw new Error('Cannot divide by zero!');
      }
      
      break;
      default:
      throw new Error('Invalid operator!');
  }

    }
calculator(1,2,"*")
  
//switch case in ts grades

let marks:number=60

switch(true){
case marks>80 && marks<=100:
    console.log("your grade is A")
    break;
    case marks>70 && marks<=80:
    console.log("your grade is B")
    break;
    case marks>60 && marks<=70:
        console.log("your grade is C")
        break;
    case marks>50 && marks<=60:
        console.log("your grade is D")
        break;
}
//2nd method that is dynamic
function result(marks:number){
    switch(true){
        case marks >80 && marks<= 100:
            console.log("A grade")
            break;
            case marks >70 && marks<= 80:
            console.log("B grade")
            break;
            case marks >60 && marks<= 70:
            console.log("C grade")
            break;
            case marks >50 && marks<= 60:
            console.log("D grade")
            break;
            case marks >40 && marks<= 50:
            console.log("Fail")
            break;
            default:
                console.log("incorrect input")
    }
}
result(98)
//
// 1. Basic Function Declaration
//Write a TypeScript function named greet that takes a string parameter name and returns a greeting message 
//in the format: "Hello, <name>!".
 function greet(name:string){
   
    return `Hello  ${name}!`;
 }
 let xyz=greet("iqbal")
 let xz=greet("ali")
 console.log(xz)

 //2. Function with Default Parameters
//Create a function multiply that takes two numbers, a and b, as parameters and returns their product. 
//The second parameter should have a default value of 1.

function multiply(a:number,b:number){
  let pro = a*b;
  return pro
}
let pro = multiply(2,3);
console.log(pro)

//3. Arrow Function
//Convert the following regular function into an arrow function:
//typescript
//Copy code
//function add(x: number, y: number): number {//
   // return x + y;

const add = (x: number, y: number):number => x+y;
    
//// Write a TypeScript function named greet that takes a string parameter
//  name and returns a greeting message in the format: "Hello, <name>!".
function greet(name:string){
    return Hello ${name}
}
let greetings=greet("Aminah")
console.log(greetings)
// Create a function multiply that takes two numbers, a and b, as parameters 
// and returns their product. The second parameter should have a default value of 1.
function multiply(a:number, b=1){
return a * b
}
let product = multiply(2)
console.log(product)

// Convert the following regular function into an arrow function:
// typescript
// Copy code
// function add(x: number, y: number): number {
//     return x + y;
// }

let add = (x:number, y:number):number => x + y

// Write a TypeScript function fullName that takes two parameters: firstName and
//  lastName. The lastName parameter should be optional. The function should return 
//  the full name, and if the lastName is not provided, it should return just the 
//  firstName.
//ans4.
function fName (1stname:string,2ndname?:string):string{
    return lastName ? `${}`
}

function fullname(firstname:string, lastname?:string){
//     return lastname ? ${firstname} ${lastname}: firstname

if(lastname !== undefined){
    return ${firstname} ${lastname}
}return ${firstname}
 }
let profile = fullname("Aminah")
console.log(profile)
//Implement a function named getInfo that can take either a string or a number as a parameter. If it's a string,
// the function should return "You provided a string". If it's a number, the function should return 
//"You provided a number".
function getInfo(x:string):string
function getInfo(x:number):string
function getInfo(x:string|number):any{
    if(typeof x == "string"){
        return "You provided a string"
    } else if(typeof x == "number"){
        return "You provided a number";
}  
}