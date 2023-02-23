// Norm
/* 1
   Напиши всі можливі варіанти створення функцій
   Є багато варіантів створення функцій, але основними із низ є:
   1. Оголошення функції (Function declaration)
   2. Вираз функції (Function expression)
   3. Стрілкові функції (Arrow function)
 */

// 2

// function showHowArgumets () {
//     console.log(arguments.length);
// }
//
// showHowArgumets(2 , 3, 4, 5);

// 3
// let userFirstNumber = +prompt(`Enter your first number`);
// let userSecondNumber = +prompt(`Enter your second number`);
//
// function getNumberEquation (num1 , num2) {
//     if (num1 > num2){
//         console.log(1);
//     } else if ( num1 < num2 ) {
//         console.log(-1);
//     } else {
//         console.log(0);
//     }
// }
//
// getNumberEquation(userFirstNumber, userSecondNumber);

// 4
// let userNum = +prompt("Enter your number")
// let factorial = 1;
// function getFactorial (userNum) {
//     for (let i = 1; i <= userNum; i++){
//         factorial = factorial * i;
//     }
//     console.log(`Factorial number ${userNum} is ${factorial}`);
// }
//
// getFactorial(userNum);

//5
// let userNumberOne = +prompt(`Your first number`)
// let userNumberTwo = +prompt(`Your second number`)
// let userNumberThree = +prompt(`Your third number`)
// let result = (num1, num2, num3) => (num1 * 100) + (num2 * 10) + num3;
//
// console.log('Your number is ' + result(userNumberOne, userNumberTwo, userNumberThree));

// 6
// function areaRectangle(length, width = length) {
//     let areaRectangle = length * width;
//     return areaRectangle;
// }
//
// console.log('The area of rectangle is ' + areaRectangle(6, 8));

//        NORM
// 1
// let userNumber = +prompt(`Your number is `);
//
// function perfectNumber(number) {
//     let sum = 0;
//     for (let i = 1; i < number; i++){
//         if (number % i === 0) {
//             sum += i;
//         }
//     }
//     if (sum === number ) {
//         console.log(`${number} is perfect number`);
//     } else {
//         console.log(`${number} is not perfect number`)
//     }
//
// }
//
// perfectNumber(userNumber);

// 2

// function test(min, max) {
//     let i = min;
//     for (i; i <= max; i++){
//         perfectNumber(i);
//     }
// }
//
// function perfectNumber(number) {
//     let sum = 0;
//     for (let i = 1; i < number; i++){
//         if (number % i === 0) {
//             sum += i;
//         }
//     }
//     if (sum === number ) {
//         console.log(`${number} is perfect number`);
//     }
// }
//
// test(1, 40000);
