// Coding challenge #1: Print numbers from 1 to 10
//for(i = 1; i <= 10; i++) 
//{
//    console.log(i);
//}

// Coding challenge #2: Print the odd numbers less than 100

//for(i = 1; i <= 100; i += 2)
//{
//    console.log(i);
//}

// Coding Challenge #3: Print the multiplication table with 7

//for(i= 1; i<= 10; i++)
//{
//    let row = "7 * " + i + "=" + 7 * i;
//    console.log(row);
//}

// Coding Challenge #4: Print all the multiplication tables
// with numbers from 1 to 10

//for(let i = 1; i <= 10; i++)
//{
//    printTable(i);
//    console.log("");
//}
//
//function printTable(n)
//{
//    for(let i = 1; i <= 10; i++)
//    {
//        let row = n + " * " + i + " = " + n * i;
//        console.log(row);
//    }
//}

// Challenge #5: Calculate the sum of numbers from 1 to 10

//let sum = 0;
//
//for(let i = 1; i <= 10; i++)
//{
//    sum += i;
//}
//console.log(sum)

// Challenge #6: Calculate 10!

//let prod = 1;
//
//for(let i = 1; i <= 10; i++)
//{
//    prod *= i;
//}
//
//console.log(prod);

// Challlenge #7: Calculate the sum of odd numbers greater than 10 and less or equal to 30

//let sum = 0;
//
//for(let i = 11; i <= 30; i += 2)
//{
//    sum+= i;
//}
//console.log(sum);

//Challenge #8: Create a function that will convert from Celsius to Fahrenheit

function celsiusToFahrenheit (n)
{
    return n * 1.8 + 32;
}
let x = celsiusToFahrenheit(20);
console.log(x);
