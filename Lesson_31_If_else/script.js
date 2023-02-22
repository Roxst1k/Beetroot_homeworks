// Min

// 1
// let userAge = +prompt ('How old are you: ');
//
// if (userAge >= 0 && userAge <= 11) {
//     alert('You are children');
// } else if (userAge >= 12 && userAge <= 17){
//     alert('You are teenager');
// } else if (userAge >= 18 && userAge <= 59) {
//     alert('You are adult');
// } else if (userAge >=60) {
//     alert('You are pensioner')
// } else {
//     alert('Please enter correct info')
// }


// 2
// let number = +prompt('Введіть число від 0 до 9:');
//
// switch (number) {
//     case 0:
//         alert(')');
//         break;
//     case 1:
//         alert('!');
//         break;
//     case 2:
//         alert('@');
//         break;
//     case 3:
//         alert('#');
//         break;
//     case 4:
//         alert('$');
//         break;
//     case 5:
//         alert('%');
//         break;
//     case 6:
//         alert('^');
//         break;
//     case 7:
//         alert('&');
//         break;
//     case 8:
//         alert('*');
//         break;
//     case 9:
//         alert('(');
//         break;
//     default :
//         alert('Your number is not correct');
//         break;
// }


// //3
// let userFirstNumber = +prompt("Enter your first number");
// let userSecondNumber = +prompt("Enter your second number");
// let result = 0;
//
// if (userFirstNumber >= userSecondNumber){
//     alert('Please enter correct number')
// } else {
//     for (let i = userFirstNumber; i <= userSecondNumber; i++) {
//         result += i;
//         console.log(result);
//     }
// }
//
// alert('Sum of numbers in a given range is: ' + result );


// //4
// let firstNumber = +prompt('Your first number is:');
// let secondNumber = +prompt('Your second number is:');
// let smallerNumber;
//
// if (firstNumber < secondNumber) {
//     smallerNumber = firstNumber;
// } else {
//     smallerNumber = secondNumber;
// }
//
// let greatestCommonDivisor = 1;
// for (let i = smallerNumber; i >= 1; i--) {
//     if (firstNumber % i === 0 && secondNumber % i === 0) {
//         greatestCommonDivisor = i;
//         break;
//     }
// }
//
// alert(`Greatest common divisor ${firstNumber} and ${secondNumber} = ${greatestCommonDivisor}`);

//5
// let userNumber = +prompt("Enter your number");
// for (i = userNumber; i >= 1 ; i--){
//     if (userNumber % i === 0) {
//         console.log (i);
//     }
// }


// Norma

//1 palindrom ??????? розвернути число і порівняти??????

// let userNumber = prompt('Please enter your number');
// let userFirstNumber
// let userSecondNumber;
// let firstNumber;
// let secondNumber;
//
// firstNumber = userNumber % 10;
// console.log(firstNumber);
// userFirstNumber = Math.floor(userNumber / 10000);
// console.log(userFirstNumber);
// if (firstNumber === userFirstNumber) {
//     secondNumber = (Math.floor(userNumber / 10) % 10);
//     console.log(secondNumber);
//     userSecondNumber = Math.floor(userNumber / 1000 % 10);
//     console.log(userSecondNumber)
//     if (secondNumber === userSecondNumber) {
//         alert('Its a palindrome');
//     } else {
//         alert('It`s not a palindrome');
//     }
// } else {
//     alert('It`s not a palindrome');
// }

// // 2
// let userSum = +prompt('What is the price of your purchases?');
// let minSale = 3;
// let normSale = 5;
// let maxSale = 7;
// let correctSum;
//
// if (userSum < 200) {
//     correctSum = userSum;
// } else if (userSum >=200 && userSum < 300) {
//     correctSum = userSum - (minSale * userSum / 100);
// } else if (userSum >= 300 && userSum < 500) {
//     correctSum = userSum - (normSale * userSum / 100);
// }else {
//     correctSum = userSum - (maxSale * userSum / 100);
// }
//
// alert(`Your need pay ${correctSum}`);

// //3
//
// let input;
// let positives = 0;
// let negatives = 0;
// let zeros = 0;
// let even = 0;
// let odd = 0;
//
// for (let i = 0; i < 10; i++) {
//     input = Number(prompt(`Введіть число :`));
//     if (isNaN(input)) {
//         console.log(`Ви ввели неправильне число. Спробуйте ще раз.`);
//         i--; // зменшуємо лічильник, щоб не обчислювати це введення числа
//         continue; // переходимо до наступної ітерації циклу
//     }
//     if (input > 0) {
//         positives++;
//         if (input % 2 === 0) {
//             even++;
//         } else {
//             odd++;
//         }
//     } else if (input < 0) {
//         negatives++;
//         if (input % 2 === 0) {
//             even++;
//         } else {
//             odd++;
//         }
//     } else {
//         zeros++;
//     }
// }
//
// console.log(`Ви ввели ${positives} додатніх чисел, ${negatives} від'ємних чисел та ${zeros} нулів.`);
// console.log(`З них ${even} парні числа та ${odd} непарні числа.`);


// //4

// let dayIndex = +prompt("Введіть день неділі від 1го до 7ми: ")
// if (dayIndex > 7 || isNaN(dayIndex) || dayIndex === 0){
//     alert("Введи коректний день")
// }else {
//     while (true) {
//         let dayName = "";
//         switch (dayIndex) {
//             case 1:
//                 dayName = "Понеділок";
//                 break;
//             case 2:
//                 dayName = "Вівторок";
//                 break;
//             case 3:
//                 dayName = "Середа";
//                 break;
//             case 4:
//                 dayName = "Четвер";
//                 break;
//             case 5:
//                 dayName = "П'ятниця";
//                 break;
//             case 6:
//                 dayName = "Субота";
//                 break;
//             case 7:
//                 dayName = "Неділя";
//                 break;
//         }
//
//         const confirmation = confirm(dayName + ". Хочеш побачити наступний день?");
//
//         if (!confirmation) {
//             break;
//         }
//
//         dayIndex++;
//         if (dayIndex > 7) {
//             dayIndex = 1;
//         }
//     }
// }


//Max

//1

// let minNumber = 0;
// let maxNumber = 100;
// let userNumber = ((minNumber + maxNumber) / 2);
//
//
// alert("Загадайте число від 0 до 100.");
//
// while (true) {
//     let answer = prompt("Ваше число > " + userNumber + ", <" + userNumber + " або ==" + userNumber + "?");
//     if (answer === "==") {
//         alert("Ура! Я вгадав ваше число.");
//         break;
//     } else if (answer === ">") {
//         minNumber = userNumber + 1;
//         console.log(`minNumber = ${minNumber}`);
//     } else if (answer === "<") {
//         maxNumber = userNumber - 1;
//         console.log(`maxNumber = ${maxNumber}`);
//     }
//     userNumber = Math.floor((minNumber + maxNumber) / 2);
//     console.log(`guess = ${userNumber}`)
// }

//2
// let number = 2;
//
//
// for (let i = number; i <= 9; i ++) {
//     console.log(`Multiplication table ${number}`);
//     for (let i = 1 ; i <= 10; i++) {
//         let result = number * i;
//         console.log(`${number} * ${i} = ${result}`);
//     }
//     number++;
// }


//3

// let userYear = +prompt("Enter your year ");
// let userMonth = +prompt("Enter your month ");
// let userDate = +prompt("Enter your date ");
// userDate++;
//
// if (userMonth === 0 || userMonth > 12 ) {
//     alert(`Please enter correct month`);
// } else if (userDate === 0 || userDate > 32) {
//     alert(`Please enter correct date`);
// } else if (userYear % 4 !== 0 && userMonth === 2 && userDate === 30){
//     alert(`Please enter correct date`);
// } else {
//     let currentDate = new Date (userYear, userMonth - 1, userDate);
//     console.log(`Date after yours is ${currentDate}`);
// }

