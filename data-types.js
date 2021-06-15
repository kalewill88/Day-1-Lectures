// Data Types

/*
There are six primative data types in JS.
    -sting
    -number
    -boolean
    -null
    -undefines
*/

// String

let myString = 'this is a string'; // "", '', `` are all suitable

console.log(myString)

// String Concatenation

let san = "San";
let diego = "Diego"

console.log(san+" "+ diego)


// Concatenation Method
let concat_full = san.concat(" ",diego)

console.log(concat_full)

let longString = "This is a long string \nand I would like it on multiple lines"

console.log(longString)

//Strings can be accessed by their index, using [] notation.

console.log(longString[3])

// Template literal or Template String
/*
    -Utilizes back ticks `` to all us to contain placeholders.
    -Syntav for it is 'string and a ${value}`
*/

let firstName= "Kayce"
console.log(`Hello, my name is ${firstName}`)

//Numbers

let interger = 90;
console.log(interger)

let float = 5.6;
console.log(float)

let rounded = 0.2 + 0.1;
console.log(rounded)


let strNumber = "125";
let strConvertedNumber = Number(strNumber)
console.log(strConvertedNumber)

// Literals
//Hardcoded values

let literalString = "literal string";

//Can be created using constructors.
let constrLiteralStr = String("constructor string")
console.log(constrLiteralStr)

//Booleans

/*
True or False values
    -Booleans have six primitive falsey values.
        -0
        -Empty String " "
        -false
        -Null
        NaN (Not a Number)
    -Any other values in JS is considered truthy

*/

let truValue = true
console.log(trueValue)
let falseValue = false
console.log(falseValue)

let truthy = Boolean(5)
console.log(truthy)

let falsey = Boolean(0)
console.log(falsey)

