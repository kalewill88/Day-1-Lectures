// Variables

/*

    -Primative data type which can hold any type of value (object)
    -Begin with a declaration and can have values assigned, but not necessary.
    -Declarations are case sensitive. Student is not the same as student.
    -Nomenclature is very important
    -Preferrable variables naming convention is camelCase.
    -Variables may not begin with number. They can begin with _ or $.
    -default value for variable is undefined.

*/

let $student; //Variable Declaration 
// New key word introduced with ES6.
console.log($student)

student = "Jessica" // Assignd string value to variable student

console.log(student)

// Declaration  = value
let homework = "Never" 

console.log(homework)

var teacher; //Variable Declaration - do not use - will see in legacy code
// Old keyword. Causes lots of headache with scope and hoisting

const classroom = "Web Dev"; // Variable Declaration
//Declares a variable that may not be reassigned.
// Cannot be declared with undefined. Must have value attached.

console.log(classroom)

//console.log(classroom = "Math") will not work.

// Numbers

let myNum = 5;
let myFavNum = Number("5.0")
console.log(myFavNum)