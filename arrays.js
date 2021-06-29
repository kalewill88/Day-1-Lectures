//let list = ['orange', 'banana', 'oreos'];

//console.log(list[1]);

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Will', 'Amira']];

console.log(typeof students);
console.log(students instanceof Array);

//console.log(students[2]);
//console.log(stuends[0]);

/*
Challenge

! - dive into the nested arra and pull the value 'Will'
! - print out "Hello Will!"
*/
//let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Will', 'Amira']];
//
//console.log(students[6][1]);
//let student = students[6][1];
//console.log(`Hello ${student}!`);


let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

//for(foodItem of food) {
//    console.log(foodItem)
//}

food.push('Pizza'); // * Appends 'Pizza' to end of array
console.log('push:',food);

food.splice(1, 1, 'Bananas'); // * removes shrimp, adds bananas (position, how many to cut, what to add)
console.log('splice:', food);

food .splice(2, 0, 'Sweet Pot Pie'); // * Add Sweet Pot Pie in position 2. but does not remove anything
console.log('splice 2:', food);

food.pop(); // *Remove last item in array
console.log('pop:', food)

food.shift(); // * Removes first item in array
console.log('shift:', food)

food.unshift('Popcorn', 'Steak'); // *Adds to first items in array
console.log('unshift:', food);


let colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue'];

//for (let i  = 0; i < colors.length; i++) {
//    console.log(colors[i])
//}

//colors.forEach(color => console.log(color));

colors.forEach((color, index) =>{
    console.log(color);
    console.log(index);
})

// 
/*Challenge

    ! - (Go look at MDN docs to remind you):
    ! - Create an array containing movies
    ! - Use .forEach() to list your movies
    ! - Add another movie at the end 
    ! - And replace one of your existing movies with another one
*/


let movies = ['Frozen', 'Wall-e', 'Finding Nemo', 'Lion King', 'Fantasia'];

movies.forEach((movie, index) =>{
    console.log(movie);
    console.log(index);
})
movies.push('Beauty and the Beast');
console.log('push:', movies);

movies.splice(0,1, 'Fox and Hound');
console.log('splice:', movies)

/*
Challenge

!-First check if you are working with an array
!- Using a method, flip the values within the array (what was in index 4 is now in 0, 3 to 1, etc.)
! - Using a method, print the values of the newly arranged array
*/

let arr = [1, 2, 3, 4, 5];
//    console.log(arr instanceof Array);
//    console.log('arr:', arr);
//let reverse = arr.reverse();
//    console.log('reverse:', reverse);

if(arr instanceof Array) {
    let revArr = arr.reverse()
    revArr.forEach(num => console.log(num))
} else {
    console.log('not an array')
}

