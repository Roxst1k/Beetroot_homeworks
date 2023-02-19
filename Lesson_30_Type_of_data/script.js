// Minimum
// 1
let userFirstNumber = 0.1;
let userSecondNumber = 0.2;
let result =  userFirstNumber + userSecondNumber;
alert(result.toFixed(2));

//2
let userString = "1";
let userNumber = 2;
let sumResult = +userString + userNumber;
alert(sumResult);

// 3

let userUsbSize = +prompt("Enter your USB size in Gb :");
let fileSize = 820;
let resultFile = userUsbSize * 1024 / 820;
alert(`You usb holds ${Math.floor(resultFile)} file(s) of 820mb`);

//Norm
//1
let userMoney = +prompt('How money you get:');
let priceOfChocolate = +prompt('How price of one chocolate:');

let userChocolate = Math.floor(userMoney / priceOfChocolate);
let userMoneyAfter = userMoney % priceOfChocolate ;

alert(`You buy ${userChocolate} and your change is ${userMoneyAfter}`);

//2
let threeDigit = +prompt('Enter a three-digit number:');
if (isNaN(threeDigit) || threeDigit < 100 || threeDigit > 999) {
    alert('Please enter a correct number');
}else {
    let firstNumber = Math.floor(threeDigit % 10);
    console.log(firstNumber)
    let secondNumber = Math.floor((threeDigit / 10) % 10);
    console.log(secondNumber)
    let thirdNumber = Math.floor(threeDigit / 100);
    console.log(thirdNumber)

    let resultUserNumber = firstNumber * 100 + secondNumber * 10 + thirdNumber;
    alert(`You number backwards is ${resultUserNumber}`);
}

//Max
//1
let depositAmount = +prompt('Enter the deposit amount:');
if (isNaN(depositAmount) || depositAmount <= 0) {
    alert('Please enter a valid deposit amount');
} else {
    let interestRate = 0.05; // 5% per year
    let months = 2;
    let interestAmount = depositAmount * interestRate / 12 * months;
    alert(`The interest amount is ${interestAmount.toFixed(2)}`);
}

//2
/* Первий вираз  2 && 0 && 3  --поверне 0 так як оператор && шукає перший false і повертає значення того операнду
   Другий вираз  2 || 0 || 3  --поверне 2 оскільки він шукає перший true, а 2 це і є перший true
   Третій вираз  2 && 0 || 3  --поверне 3 оскільки по старшинству дій спочатку іде &&, а він шукає перший false значить він
   повертає 0 далі йде оператор || він шукає перший true , так як 0 це false а 3 це true.
 */