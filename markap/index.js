number = 10;

do {
    document.write(
    number + ', ');
    number ++;
} while (number <= 20);

document.write(`<br>`)

number2 = 10;

do {
    document.write(
    number2 * number2 + ', ');
    number2 ++;
} while (number2 <= 20);

document.write(`<br>`)

multiplier = 1;
do {
    document.write(`7 * ${multiplier} = ${multiplier * 7} <br>`);
    multiplier++;
} while (multiplier <= 10);

document.write(`<br>`)

number = 15;
product = 1;
do {
    product *= number;
    number ++;
} while (number <= 35);
document.write(`the product of all integers from 15 to 35 = ${product}.`);

document.write(`<br>`)

number = 1;
sum = 0;
do {
    sum += number;
    number++;
} while (number <= 500);
average = sum / 500;
document.write(`The arithmetic mean of a number from 1 to 500: ${average}.`);

document.write(`<br>`)

sum = 0;
num = 30;

do {
  if (num % 2 === 0) {
    sum += num;
  }
  num++;
} while (num <= 80);

document.write(`The sum of even numbers in the range from 30 to 80 = ${sum}.`);

document.write(`<br>`)

num = 100;

do {
  if (num % 3 === 0) {
    document.write(`${num} <br>`);
  }
  num++;
} while (num <= 200);

document.write(`<br>`)

num = null;

do {
  num = parseInt(prompt('Введіть натуральне число:'));
} while (isNaN(num) || num <= 0);

document.write(`Дільники числа ${num}:<br>`);

divisorCount = 0;
evenDivisorSum = 0;
evenDivisorCount = 0;
variableNumber = 1;

while (variableNumber <= num) {
  if (num % variableNumber === 0) {
    document.write(`${variableNumber} <br>`);
    divisorCount++;
    if (variableNumber % 2 === 0) {
      evenDivisorSum += variableNumber;
      if (variableNumber !== num / variableNumber || variableNumber % 2 === 0) {
        evenDivisorCount++;
      }
    }
  }
  variableNumber++;
}

document.write(`Кількість парних дільників: ${evenDivisorCount}<br>`);
document.write(`Сума парних дільників: ${evenDivisorSum}<br>`);

document.write(`<br>`)

let multiplicand = 1;
do {
  let multiplier = 1;
  do {
    document.write(`${multiplicand} * ${multiplier} = ${multiplicand * multiplier}<br>`);
    multiplier++;
  } while (multiplier <= 10);
  multiplicand++;
} while (multiplicand <= 10);
