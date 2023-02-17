let name;
let _user;
let userName;
let newUserName;

// Неправильні імена змінних
// let 1name;
// let user-name;
// let user Name;
// let my_user-Name;
// let %name;

// однострокові

/*
    багатострокові
 */

/* Стиль написання змінних CamelCase, а саме lowerCamelCase наприклад змінна
userFirstName, тобто перше слово з маленької букви, всі інші з великої букви */

// Norm

const CURRENT_YEAR = 2023;
let userAge;

name = prompt('What is your name?');
alert('Hi, ' + name);

let userBirthday = +prompt('What is your year of birth?' );
userAge = CURRENT_YEAR - userBirthday;
alert( name + ' is ' + userAge + ' years old' );

let lengthSquare = +prompt(name + ', please enter the length of the side of the square ');
let perimeter = 4 * lengthSquare;
alert(`Perimeter is ${perimeter}`);

// Max
const PI = 3.14;
let radiusCircle = +prompt(name + ', please enter the radius of circle ');
let areaCircle = 2 * PI * radiusCircle;
alert('Area circle is ' + areaCircle);

let distanceBetweenCities = +prompt( name + ' please enter the distance between cities');
let timeRequired= +prompt( name + ' please enter the time to do that');

let usersSpeed = distanceBetweenCities / timeRequired ;
alert(`You need speed ${usersSpeed}`);

const COURSE = 0.9;
let userDollars = +prompt('How many dollars you get?');
let userEuros;
userEuros = COURSE * userDollars;
confirm('Do you want to continue? I can take all your money :)');
alert(`You have ${userEuros} Euros :)`);




