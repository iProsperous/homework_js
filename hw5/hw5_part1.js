//Реализовать функцию которая будет определять, в каком регистре записан n элемент переданной строки, если в верхнем то вернуть true, в противном случае вернуть false.

function lettercase(str,n) {
  if (str[n]===str[n].toUpperCase())
  return true;
  else
  return false;
}

console.log(lettercase("ПрИвЕт",1));

//Реализовать функцию которая заменяет в строке str, все вхождения подстроки find, на подстроку replace.

function replacestr(str) {
  return  str.replaceAll("find", "replace");
}

console.log(replacestr("findrhtrgr find fnjfkfind"));