//Задание 1
let value = -4;

function func1(value) {
  return value * value;
}
func1(value);
console.log(func1(value));

//Задание 2

let a = 1;
let b = 3;

function func2(value1, value2) {
  return value1 + value2;
}
func2(a, b);
console.log(func2(a, b));

//Задание 3

let k = 10;
let m = 2;
let n = 8;

function func3(value1, value2, value3) {
  return (value1 - value2) / value3;
}
func3(k, m, n);
console.log(func3(k, m, n));

//Задание 4

let day = 9;

function func4(value) {
  let dayWeek = "";

  if (value === 1) {
    dayWeek = "Понедельник";
  } else if (value === 2) {
    dayWeek = "Вторник";
  } else if (value === 3) {
    dayWeek = "Среда";
  } else if (value === 4) {
    dayWeek = "Четверг";
  } else if (value === 5) {
    dayWeek = "Пятница";
  } else if (value === 6) {
    dayWeek = "Суббота";
  } else if (value === 7) {
    dayWeek = "Воскресенье";
  } else {
    dayWeek = "Укажите верный день недели";
  }
  return dayWeek;
}
func4(day);
console.log(func4(day));

//Задание 5

let s = 4;
let t = 4;

function func5(value1, value2) {
  if (value1 === value2) return true;
  else return false;
}
func5(s, t);
console.log(func5(s, t));

//Задание 6

let p = 6;
let q = 4;

function func6(value1, value2) {
  if ((value1 + value2) > 10) return true;
  else return false;
}
func6(p, q);
console.log(func6(p, q));

//Задание 7

let l = -3;

function func7(value) {
  if (value < 0) return true;
  else return false;
}
func7(l);
console.log(func7(l));

//Задание8

let z = 9;

function isNumberlnRange(value) {
  if (value > 0 && value < 10) return true;
  else return false;
}
isNumberlnRange(z);
console.log(isNumberlnRange(z));

//Задание 9

let array = [-1, 4, 0, 7, 10, 15, 8, 5];

function func9(value) {
  let newArray = [];
  let j = 0;
  for (let i = 0; i < value.length; i++) {
    if (isNumberlnRange(value[i])) {
      newArray[j] = value[i];
      j++;
    }
  }
  return newArray;
}
func9(array);
console.log(func9(array));

//Задание 10

let digit = 123456789;

function getDigitsSum(value) {
  let sum = 0;
  while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
  }
  return sum;
}
getDigitsSum(digit);
console.log(getDigitsSum(digit));

//Задание 11

let firsrYear = 1;
let lastYear = 2020;
let countYear = [];

function func10(first, last) {
  let j = 0;
  for (let i = first; i <= last; i++) {
    if (getDigitsSum(i) === 13) {
      countYear[j] = i;
      j++;
    }
  }
  return countYear;
}
func10(firsrYear, lastYear);
console.log(func10(firsrYear, lastYear));

//Задание 12

let even = -6;

function isEven(value) {
  if (value % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
isEven(even);
console.log(isEven(even));

//Задание 13

let number = [1, 4, 6, 9, 5, 3, 12, 15, 28, 0, 30, 7, -2, 0];

function func11(value) {
  let evenArray = [];
  let j = 0;

  for (let i = 0; i < value.length; i++) {
    if (isEven(value[i])) {
      evenArray[j] = value[i];
      j++;
    }
  }
  return evenArray;
}
func11(number);
console.log(func11(number));

//Задание 14

let divisor = 10;

function getDivisors(value) {
  let temp = value;
  let divisorArray = [];
  let i = 0;
  if (temp === 1) {
    return (divisorArray[i] = temp);
  } else if (temp > 1) {
    while (temp > 0) {
      if (value % temp === 0) {
        divisorArray[i] = temp;
        i++;
      }
      temp--;
    }
    return divisorArray;
  } else {
    return "Делителем 0 является любое число, кроме самого 0";
  }
}
getDivisors(Math.abs(divisor));
console.log(getDivisors(Math.abs(divisor)));

//Задание 15

let sum = 452;

function func12(value) {
  while (value > 9) {
    value = getDigitsSum(value);
  }
  return value;
}
func12(sum);
console.log(func12(sum));

//Задание 16

let str = "а роза упала на лапу Азора";

let func13 = (str) => {
  let strReverse = str.split("").reverse().join("");
  if (strReverse === str) {
    return true;
  } else {
    return false;
  }
};
func13(str.toLocaleLowerCase().replace(/\s/g, ""));
console.log(func13(str.toLocaleLowerCase().replace(/\s/g, "")));
