// 1.

//  1)
const a = 3;
const b = 6;
console.log(a * b);


//  2)
const c = 8;
const d = 2;
console.log(c / d);


//  3)
const e = 7;
const f = 1;
console.log(e + f);


//  4)
let number1 = 11
console.log(number1);

let boolean1 = true;
console.log(boolean1);

let string1 = 'java script';
console.log(string1);

let string2 = '100';
console.log(string2);


//  5)
let num = 1;
num += 11;
num -= 11;
num *= 11;
num /= 11;
num++;
num--;




// 2.

//  1)
/*
let squaring = Number(prompt('Введіть число: '));
let squaringResult = squaring ** 2;

if(Number.isNaN(squaringResult)) {
    console.log('Ти не правий, введи число');
} else {
    console.log(squaringResult);
}
*/


// 2)
/*
let firstOperand = Number(prompt('Введіть перше число: '));
let secondOperand = Number(prompt('Введіть друге число: '));
let arithmeticMean = (firstOperand + secondOperand) / 2;

if(Number.isNaN(arithmeticMean)) {
    console.log('Ти не правий, введи число');
} else {
    console.log(arithmeticMean);
}
*/


// 3)
/*
let minutes = Number(prompt('Введіть кількість хвилин: '));
let secondsResult = minutes * 60;

if(Number.isNaN(secondsResult)) {
    console.log('Ти не правий, введи число');
} else {
    console.log(secondsResult);
}
*/


// 4)
let greeting = 'Hello,'
let userName = String(prompt("Введіть Ваше ім'я: "));

console.log(greeting + userName);
alert(greeting + userName)
