//Operators

/*
    Assignment, Arithmetic & Comparison
        - Assignment assigns value to a declaration
            -denoted by =
        - Arithmetic operators perform simple math
            -Addition +
            -Subtraction -
            -Division /
            -Multiplication *
            -Exponent **
            -Modulus %
            -Math. objects to help with other operations.
        - Comparison operators compare values
            -Equality and Strict Equality == & ===
            -Inequality and Strict Inequality == & ===/
            -Greater than or less than > <
            -Greater or equal than or less or equal than >= <=
            -AND && and OR //
*/

let age = 25;

// Modulus - provides remainder of Euclidean division.

console.log(25 % 5)

// Math Object

console.log(Math.max(5, 2, 17, 22, 97))

/*
    Equality & Strict Equality Operators
        -Return truthy or falsey value depending on a given condition
        -Equality performs type coercion on one of the values it's being compared to. For ex: 5 == "5" converts the string into an integer.
        -Strict equality check if the value and its type are the same.
        */

console.log(5 == 5      ) // returns true

console.log(5 === 5) // returns true

console.log (5 == "5") // returns true because of type coercion

console.log(5 === "5") // returns false because we're checking for value & value type

let x = 5;
let y= "5"

console.log(typeof x, typeof y) //same value different data type

// Inequality and Strict Inequality

console.log("-----------")
console.log(5 != 7) // returns true (5 is not equal to 7)

console.log(5 != 5) // returns false (both values are the same)

console.log(5 != "5") // returns false (type coercion makes str(5) an int (5))
console.log(5 !=="5") // returns true (different data types)

//AND && Comparison
// Returns true if two boolean values are true
console.log(true && true)
// Returns false if either of the value is not the same
console.log(true && false)

// OR || Coparison
// Returns true if either of the values are true
console.log(true || false)
console.log(true || true)
console.log(false || false)

// Strict Inequality & Booleans !=
// Flips resulting boolean
let flippedBool = !true
console.log(flippedBool)
console.log("----------------")

// Extra Credit: How to get date in JavaScript
let date = new Date
let year = date.getFullYear()
let month = date.getMonth()
month += 1 // month = motnh + 1 OR month = 5 + 1
let day = date.getDay()

console.log(`Today is ${day} of ${month} of ${year}`)

console.log(date.toDateString())

// Null vs Undefined vs Not a Number

/*
    Null - empty value; a container or space for somthing  to fill it in the future.
    Undefined - default value of a declaration. Does not act as an empty container. 
    Not a Number (NaN) - determines if a value is not a number
*/

console.log(isNaN(123)) // returns false (is a number)
console.log(isNaN(0/0)) // returns true (can't dives by zero; NaN)
console.log(isNaN(NaN)) // returns true
console.log(isNaN(Math.sqrt(-1))) //returns true because imaginary (i) number is NaN

// CHALLENGE
/*
    Silver
    Create three variables: name (str), age (int), and a city and state where
    you live (str). Use tempate literal to console log it. 

    Gold
    Create a new variable called result which holds a conatenated version of your prior variables.
    Find a method that will console lof the length of that new variable.

    Platinum
    Utilize a method that will make all your text capitalized and check
    if you live in Indianapolis, IN
*/

let firstname = "Kayce";
let myAge = "32";
let city = "Indianapolis, IN"

console.log(`My name is ${firstname}. I'm ${myAge} years old, and I live in ${city}`);


let result = firstname + " " + myAge + " " + city

console.log(result)
let concatFullLength = result.length
console.log(result)

console.log(result.includes("Indianapolis, IN"))
console.log(result.toUpperCase())


