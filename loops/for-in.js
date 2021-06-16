// For in Loop

/*
    For in loops work by looping over enumerable property names of an object.

    for(iterate in iterable) {
        code block to execute over each iterate
    }

*/

let teacher = "Paul Niemczyk";
let randomNum = [1, 3, 5, 8, 88]

let person = {
    name: "Paul",
    age: 25
}

//for (i in teacher) {
//    // (i - enumerable, teacher[i] - object of enumerables)
//    console.log(i, teacher[i])
//}

for (i in randomNum) {
    console.log(i, randomNum[i])
}

for(property in person) {
    //          (key    , value) of our object
    console.log(property, person[property])
    // properties are what are listed ie. name and person. You can use any variable - ie. i                                                                                                                                                                                                                                                                                                             
}