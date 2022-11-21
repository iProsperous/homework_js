let str = "мама мыла раму";

function stringToArray(str){
  return str.trim().split(" ");
}

console.log(stringToArray(str));

function deleteCharacters(str, length){
  return  str.substr(str, length);
}

console.log(deleteCharacters(str, 6));

function insertDash(str) {
  return str.replaceAll(" ", "-").toLocaleUpperCase();
}

console.log(insertDash(str));

function func1(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

console.log(func1(str));

function capitalize(str) {
  if (!str) return str;
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}
  return words.join(" ");
}

console.log(capitalize(str));

str = "КаЖдЫй ОхОтНиК";

function changeRegister(str) {
let new_str = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      new_str += str[i].toUpperCase();
    } else {
      new_str += str[i].toLowerCase();
    }
  }
  return new_str;
}

console.log(changeRegister(str));

str = "Гаг$%^/арин по*&^%%,летел в кос)(^%$мос в 1961 году";

function removeChar(str) {
 return str.replace(/[^a-zа-яё0-9\s]/gi, '');
}

console.log(removeChar(str));

function zeros(num, len) {
let zeroLength = len - (num + '').length;
        let zeroNum = '';
          for (zeroLength; zeroLength > 0; zeroLength--) {
                zeroNum += 0;
          }
            
          return zeroNum + num;
}

console.log(zeros (2, 10));

let str1 = "ПрИвЕт";
let str2 = "пРиВеТ";

function comparison(str1, str2) {
    if (str1.toLocaleUpperCase() === str2.toLocaleUpperCase())
      return true;
    else 
      return false;
}

console.log(comparison(str1, str2));

str2 = "РиВ"

function insensitiveSearch(str1, str2) {
  if (str1.toLocaleUpperCase().includes(str2.toLocaleUpperCase()))
    return true;
  else
    return false;
}

console.log(insensitiveSearch(str1, str2));

str = "КаЖдЫй ОхОтНиК желает знать";

function initCap(str) {
  if (!str) return str;
  const words = str.toLocaleLowerCase().split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}
  return words.join(" ").replaceAll(" ","");
}

console.log(initCap(str));

function initSnake(str) {
  if (!str) return str;
  const words = initCap(str).split("");
  for (let i = 0; i < words.length; i++) {
    if (i===0 && words[0]===words[0].toUpperCase())
    words[0] = words[0].toLowerCase();
    if (words[i]===words[i].toUpperCase() && words[i-1]===words[i-1].toLowerCase() && i!=0) {
      words[i-1] = words[i-1]+"_";
    }

}

return words.join("").toLocaleLowerCase();
   
}

console.log(initSnake(str));

function repeatStr(str, n) {
let message = "";  
  for (let i = 0; i < n; i++) {
    message+=str;
}
  return message;
}

console.log(repeatStr(str, 5));

str1 = "знать";

function endsWith(str, str1){
if (str.substr(str.length-str1.length,str1.length)===str1)
return true;
else
return false;
}

console.log(endsWith(str, str1));

let substr = " где сидит фазан";
let pos = 27;

function insert(str, substr, pos=0){
  let array = str.split('');
  array.splice(pos,0,substr);
  return array.join('');
}

console.log(insert(str, substr, pos));

function limitStr(str, n, symb){
  if (!n && !symb) return str;
  symb = symb || "...";
  return str.substr(0,n) + symb;
  
}

console.log(limitStr(str, 11));

function count (str, stringsearch) {
  return str.split(stringsearch).length-1;
}
console.log(count ("привет привет привет при", "при"));

str = "  мама  мыла    раму   ";

function strip(str){
  return str.replace(/\s+/g, ' ').trim();
}

console.log(strip(str));

str = "мама мыла раму";
let n=2;

function cutString(str, n){
  let array=str.split(" ");
  let removed = array.splice(n);
  return array.join(" ");

}

console.log(cutString(str, 2));

let word = "iмама";

function findWord(word, str){
  if (str.includes(word))
    return true;
    else return false;
}

console.log(findWord(word, str));