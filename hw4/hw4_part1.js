//Практика из презентации. 
//Функции.
//Задание 2

function exponentiation(number, degree = 1) {
  console.log(number ** degree);
}

exponentiation(2, 3);

//Задание 3

let massiv = [1, 2, 3, 4];

function arithmetic(a) {
  let arithMean = 0;
  for (let i = 0; i < a.length; i++) {
    arithMean += a[i];
  }
  console.log(arithMean/a.length);
}

arithmetic(massiv);

//Стрелочные функции.
//Задание 2

let letter = "я";
const stringTemplate = "аеёиоуыэюя"; 

let isVowelLetter = letter => {
     if (stringTemplate.includes(letter)) {
      return true;
    } else {
      return false;
    } 
}
console.log (isVowelLetter (letter.toLocaleLowerCase()));

//Задание 3

let str = "а роза упала на лапу Азора";

let isPalindrome = str => {
let strReverse = str.split("").reverse().join("");
 if (strReverse===str) {
   return true;
 } else {
   return false;
 }
}
console.log(isPalindrome(str.toLocaleLowerCase().replace(/\s/g, "")));
