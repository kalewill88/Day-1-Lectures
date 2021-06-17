// Functions
/*
    Function is a block of code that can take in parameters (door), perform an action, and return the result of the action. -- pasta machine
    There are two types of functions:
        -function declaration
        -function expression
            -arrow functions
    Functions have a default return statement of undefined unless otherwise specified.
    */

// Function Declaration

/*
    Declarations are hoisted. This is their template. 
    function functionName(parameter) {
        block of code to be run
        return statement (not needed)
    }
*/

function funDeclaration() {
    //console.log("This is a function declaration.")
    return "This is a function declaration"
}

// Function will not run until it is called.
// Parentheses immediately invoke the fuction. 
//funDeclaration()

funDeclaration()

//let result = funDeclaration()
//console.log(result)

//Functions can have 0-infinite amount of parameters.
// Parameters act as doors to let arguments inside of the function.

function greetUser(name) {
    return `Hello ${name}`
}
let userName1 = "Kayce"
let userName2 = "Marshall"
let userName3 = "Jessica"

console.log(greetUser(userName1))
console.log(greetUser(userName2))
console.log(greetUser(userName3))

// Function Expression
/*
    Function expression utitlizes a variable as a placeholder.
    Function expression is not hoisted
*/

let myDog = function(name, breed) {
    console.log(`${name} is a ${breed}`)
}

console.log(myDog("Bentley", "Olde English Bulldog"))

// Arrow Function
/*
    Introuduced in ES6
    More concise way of writing functions
    Arrow functions are created using function expression ONLY
*/

// Concise Body Function
// Can only have one parameter if it's not enclosed by ( )

let greeting = () => console.log(`Hello friend`)

greeting("Paul")

// Block Body Arrow Function

let sendEmail = (email, name) => {
    return `Hello ${name}:

    We have been trying to reach you about your car's extended warranty. 
    Is this email, toe correct email for you? ${email}

    Sincerely, 
    Annoying people.`
}

console.log(sendEmail("kalewill88@elever.com", "Paul"));

//Immediately Invoked Function Execution
/*
    Function declarations that have no name and are immediately invoked.
*/

(function () {
    console.log("IIFE")
})();

// Function return statements
// Must always return only one value

function returnFun(x, y) {
    // return 2, 5 returns 5 because return must only have one value
    return [x, y]
    //return typeof [2, 5]
    //let mySet = new Set
    //mySet.add(x)
    //mySet.add(y)
    //return typeof mySet
}
console.log(returnFun(2, 5))

// Challenge
//Create a function declaration named tipCalculator which takes the bill, the sales tax, and the tip percentage and returns the tip amount. 

function tipCalculator (bill, salesTax, tipPercent) {
    let taxAmt = bill * (salesTax/100)
    let totalBill = bill + taxAmt
    let totalTip = totalBill * (tipPercent/100)
    let billTotal = totalTip + totalBill
    return `Your bill total is ${billTotal} of which the tip is ${totalTip}`
}

console.log(tipCalculator(100, 7, 20))

// Extra spicy challenge

/* 
Create a function of your choice (Declaration or Expression) named capitalizaName which takes one parameter. It then capitalizes the first letter of the name and returns the full name to you. 
*/

function capName(name) {
    let lowerName = name.toLowerCase()
    //console.log(lowerName)
    // ! these console.logs allow us to see every step of the way.
    let fLetter = lowerName[0].toUpperCase()
    //console.log(fLetter)
    return fLetter + lowerName.slice([1])
}

console.log(capName("kayce"))


// Extra Spicy Challenge
//Create a function which reverses a string using recursion. (ouch!)

function revStr(str) {
    return (str === "") ? "" : revStr(str.subtr(1)) + str.charArt(0);
}

//function revStr(str) {
//    if (str === "") {
//        return "";
//    } else {
//        return revStr(str.substr(1)) + str.charArt(0))
//  }
//}
//revStr("Kayce")