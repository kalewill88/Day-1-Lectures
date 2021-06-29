// Array Destructuring & Spread Operator

//Spread Operator
/*
Spread operator pulle out all elements of an array and gives you a stanalone list of them. 
        * Denoted by  ... 
        * Must be inserted into a new array [...]
        * Spread operator unpacks the values from one array or object into another.
        * Add values to original array without affecting its copy.
        * Copy modification does not affect the original.
*/

let fullName = ["Kayce", "Williams"]
// this causes fullName array to be nested inside of a tempArr array.
//let tempArr = [fullName]


let tempArr = [...fullName]
fullName.unshift("Ms")
console.log(fullName)
console.log(tempArr)

// We can use multiple spread operators to unpack multiple arrays into a new array.

let birthPlace = ["Indianapolis, Indiana"]

let nameBirth = [...fullName, ...birthPlace]
console.log(nameBirth)

//... & Numbers

console.log(Math.min(1, 5, -3))

let prices = [10.99, 2.99, 5.83, 27.99, 6.58]
//console.log(Math.min(prices), typeof (prices)) - you will get Nan because Array is not a number
// use spread operator - This fails because an array is NotANumber
console.log(Math.min(...prices))

// ... & Objects

let persons = [{name: "Kayce", age: 25}, {name: "Anne", age: 20}]
//console.log(persons)
let copiedPersons = [...persons]
//console.log(copiedPersons)
persons.push({name: "Freya", age: 21})

/* Any changes we make to the persons or copiedPersons when modified, accesses the reference value in the memory. For that reason any changes made to either persons or copiedPersons will be reflected in its counterpart.
*/
//copiedPersons[0].name = "Mike"
//persons[0].name ="Paul"
console.log(persons)
console.log("---------")
console.log(copiedPersons)

// How do we avoid changing original and copied array?
//Make sure to return new objects with their own memory space.

let newPersons = persons.map(person => ({
    name: person.name,
    age: person.age
}))
newPersons.push({name:"Kayce", age: 21})
newPersons[0].name = "Henry"
console.log("=============")
console.log(newPersons)

/*
    JavaScript has 5 primative data types:
        *boolean
        *null
        *undefined
        *string
        *number
    These data types are assigned to a value

    Three data types passed by reference:
        *array
        *function
        *object
    Non-primitive data types contain a reference to a value. The reference points to the objects location in memory. Variables don't contain the value.
*/

let x = 10; //Memory: Variable x Value 10
let y = "abc" //Memory: Variable y Value "abc"

let a = x // MEMROY: Variable of 
let b = y 

console.log(x, y, a, b)

let arr = [] // Create an array in memory.  Arr receives the address location of that array somewhere in memory. 

arr.push(1)

/* 
    VARIABLE    VALUE   ADDRESS     OBJECT
    arr         <#001>  #001        [ ]
    arr         <#001>  #001        [ 1 ]
*/

let reference = [1];
let refCopy = reference

/* 
    VARIABLE    VALUE   ADDRESS     OBJECT
    reference    <#001>  #001        [ 1 ]
    refCopy      <#001>  
*/

reference.push(2)
console.log(reference, refCopy)

/* 
    VARIABLE    VALUE   ADDRESS     OBJECT
    reference    <#001>  #001        [ 1, 2 ]
    refCopy      <#001>  
*/

let myObj = {
    name: "Paul",
    age: 25,
    lives: "Indy"
}

console.log(myObj.name)

let newObj = myObj

newObj.name = "John"
console.log(newObj.name)
console.log(myObj.name)

/* 
    VARIABLE    VALUE   ADDRESS     OBJECT
    myObj.name    <#001>  #001        "Paul" ==> "John"
    newObj.name   <#001>  
*/

// How to clone objects in JS

let ourObject = {
    name: "Anne",
    age: 22
}

//Utilize Object Constructor

let copiedObject = new Object(ourObject)
console.log(copiedObject)
ourObject.name = "Paul"
console.log(copiedObject)

// Utilizing Spread Operator
let copyUsingSpread = {...ourObject}
console.log(copyUsingSpread)
copyUsingSpread.name = "Testing"
console.log(copyUsingSpread)
console.log(ourObject)

// Array Destructuring

/*
    Array Destructuring allows you to unpack values from arrays, or properties from objects => into distinct variables.
        *Similar syntax as array literal
        *Left have side of assisngment operator - only difference
        *Used to unapack array/object into distinct variables
*/

let cities = ["Boston", "New York", "Chicago", "LA"]

//let unpackCities = [...cities]
//console.log(unpackCities)

//let boston = cities[0]
//console.log(boston)

/*
    JS unpacks the values from cities array and assigns each value its own variable based on their original position in an array.
*/
let [boston, newYork, chicago, la] = cities
console.log(boston)
console.log(newYork)
console.log(chicago)
console.log(la)
// or console.log(boston, newYork, chicago, la) -- not an array 

// Rest Syntax
/*
    Rest looks just like Spread syntax. Spread expands an array. Rest collects multiple elements and condenses them into one. Can use with objects and arrays.
*/

let cars = ["Porche", "BMW", "Maserati", "Aston Martin",
{transmission: "manual", year:2012, wheelsDriven: "rwd"}]

let [porche, bmw,...otherInfo] = cars
console.log(porche, bmw)
// otherInfo becomes an array of the rest of the elements of cars. 
console.log(otherInfo)

// How to skip values using rest operator. 
//Rest operator must be the last element defined. 
let [brand, , , , ...features] = cars

console.log(brand, features)

// Challenge
/*
    Create an array called statesVisited with a list of states you've been to.

    Create an instance of that array called statesCountries and unpack all of the array values of statesVisited inside it. Now add additional countries to which you have been (if none, add ones that you intend on visiting).

    Now unpack each individual state into its own variable, and unpack all of the countries into its own ‘countries’ variable.

    Now take each individual country and use rest operator to pack up all of the countries into one variable and leave all of the states unpacked in an array.
*/


let statesVisited = ["California", "Colorado", "New Mexico"]

let statesCountries = [...statesVisited, "Ireland", "Spain"]
//console.log(statesVisited)
// OR
statesCountries.push("England") // array and array method ex).push
//console.log(statesCountries)

let [california, colorado, newMexico, ...countries] = statesCountries

console.log(california, colorado, newMexico, countries)

//Extra Credit:
//let result = [california, colorado, newMexico, ... countries]
//console.log(result)



