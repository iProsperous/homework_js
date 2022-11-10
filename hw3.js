//Презентация. Условные операторы.
//Задание 1 
let segmLength1 = 10;
let segmLength2 = 35;
let segmLength3 = 20;

if (segmLength1>segmLength2 && segmLength1>segmLength3)
    console.log("Длина первого отрезка большеи равна", segmLength1);
else if (segmLength2>segmLength1 && segmLength2>segmLength3)
    console.log("Длина второго отрезка больше и равна", segmLength2);
else
    console.log("Длина третьего отрезка больше и равна", segmLength3);

//Задание 2 

let temp = 35;

if (temp<=-30){
  console.log("Оставайтесь дома!");
}
else if (-30<temp && temp<=-10){
  console.log("Сегодня холодно");
}
else if (-10<temp && temp<=5){
  console.log("Не холодно");
}
else if (5<temp && temp<=15){
  console.log("Тепло");
}
else if (15<temp && temp<=25){
  console.log("Очень тепло");
}
else if (25<temp && temp<35){
  console.log("Жарко");
}
else {
  console.log("Пекло");
}

//Задание 3

let admin ={
  jobtitle: "Администратор",
  name:"Tom",
  age: 30,
  birthday: "20.12.1992",
  likedrink: "tea"
};

let user ={
  jobtitle: "Пользователь",
  name:"Jhon",
  age: 36,
  birthday: "16.04.1986",
  likedrink: "milk"
};

let manager ={
  jobtitle: "Менеджер",
  name:"Ivan",
  age: 25,
  birthday: "07.10.1997",
  likedrink: "coffee"
};

let designer ={
  jobtitle: "Дизайнер",
  name:"Eva",
  age: 18,
  birthday: "03.05.2004",
  likedrink: "water"
};

let role=designer;

switch(role){
  case admin:
    console.log("Роль:",role.jobtitle + ", имя:",role.name + ", возраст:",role.age + ", день рождения:",role.birthday + ", любимый напиток:",role.likedrink);
  break;
  case user:
    console.log("Роль:",role.jobtitle + ", имя:",role.name + ", возраст:",role.age + ", день рождения:",role.birthday + ", любимый напиток:",role.likedrink);
  break;
  case manager:
    console.log("Роль:",role.jobtitle + ", имя:",role.name + ", возраст:",role.age + ", день рождения:",role.birthday + ", любимый напиток:",role.likedrink);
  break;
  case designer:
    console.log("Роль:",role.jobtitle + ", имя:",role.name + ", возраст:",role.age + ", день рождения:",role.birthday + ", любимый напиток:",role.likedrink);
  break;
  default:
    console.log("такой роли не существует");
  break;  
}

//Презентация. Логические операторы.

console.log(null||0||""||undefined); //undefined
console.log("яблоко"&&true&&null&&1);//null
console.log(0||true&&"false"||null); //false
console.log(0&&true||"false"&&null);//null
console.log(!0&&!!1);//true
console.log(!(null||!"апельсин"&&true));//true

//Презентация. Циклы
//Задание 1

let course = "javascript"
let N = 5;

for (let i=0;i<N;i++) {
  console.log (course);
}

//Задание 2

let allAuto = 10;
let minAuto = 4;
let day = 1;

while (allAuto> minAuto){
  day++;
  allAuto /= 2;
}
console.log("На",day + " день продаж");

//Задание 3

let firstYear=1800;
let lastYear=2022;
const firstFlySpace = 1961;
let leapYear = 0;
let iteration1=0;
let iteration2=0;

for (let year=firstYear; year<=lastYear;year++){
  if (year === firstFlySpace) {
    iteration1=year-firstYear;
  }
  if ((year%4===0 && year%100 !=0) || year%400===0){
    leapYear++;
  }
  iteration2=lastYear-firstYear;
}
console.log("первый полет в космос -", firstFlySpace + " год, кол-во итераций", iteration1);
console.log("кол-во високосоных лет в отрезке -", leapYear + " , кол-во итераций", iteration2);

//Работа с if-else
//Задание 1
let a=3;
if (a===0) {
  console.log("Верно");
}
else {
  console.log("Неверно");
}
//Задание 2
let b=3;
if (b>0) {
  console.log("Верно");
}
else {
  console.log("Неверно");
}
//Задание 3
let c=-1;
if (c<0) {
  console.log("Верно");
}
else {
  console.log("Неверно");
}
//Задание 4
let x=3;
if (x>=0) {
  console.log("Верно");
}
else {
  console.log("Неверно");
}
//Задание 5
let y=-1;
if (y<=0) {
  console.log("Верно");
}
else {
  console.log("Неверно");
}
//Задание 6
let z=0;
if (z!==0) {
  console.log("Верно");
}
else {
  console.log("Неверно");
}
//Заадние 7
let k=3;
if (k==="test") {
  console.log("Верно");
}
else {
  console.log("Неверно");
}
//Задание 8
let l="1";
if ((l==="1") && (typeof l === "string")) {
  console.log("Верно");
}
else {
  console.log("Неверно");
}

//Работа с логическими переменными
//Задание 1
let test = false;

if (test){
  console.log("Верно");
}
else {
  console.log("Неверно");
}

test ? console.log("Верно") : console.log("Неверно");

//Задание 2

if (!test){
  console.log("Верно");
}
else {
  console.log("Неверно");
}

!test ? console.log("Верно") : console.log("Неверно");

//Работа с && (и) и || (или)
//Задание 1

let p = 2;

if (p>0 && p<5) {
  console.log("Верно");
}
else {
  console.log("Неверно");
}
//Задание 2
let s = 3;

if (s===0 || s===2){
  console.log(s+=7);
}
else {
  console.log(s/=10);
}

//Задание 3

let m=3;
let n=5;

if (m<=1 && n>=3) {
  console.log(m+n);
}
else {
  console.log(m-n);
}

//Задание 4

let t=1;
let d=5;

if ((t>2 && t<11) || (d>=6 && d<14)) {
  console.log("Верно");
}
else {
  console.log("Неверно");
}

//На switch-case

let num = 5;
let result=0;
switch (num) {
  case 1:
  result="зима";
  console.log(result);
  break;
  case 2:
  result="весна";
  console.log(result);
  break;
  case 3:
  result="лето";
  console.log(result);
  break;
  case 4:
  result="осень";
  console.log(result);
  break;
  default:
  console.log("задайте значение переменной num от 1 до 4");
}

//Общие задачи
//Задание 1

let Day=31;
if (Day>=1 && Day<=10){
  console.log("Число", Day + " попадает в 1ю декаду месяца");
}
else if (Day>10 && Day<=20){
  console.log("Число", Day + " попадает во 2ю декаду месяца");
}
else if (Day>20 && Day<=31){
  console.log("Число", Day + " попадает в 3ю декаду месяца");
}
else {
  console.log("Неверное число месяца");
}

//Задание 2

let month=13;
if (month===12 || (month>=1 && month<3) ){
  console.log("Зима");
}
else if (month>=3 && month<6){
  console.log("Весна");
}
else if (month>=6 && month<9){
  console.log("Лето");
}
else if (month>=9 && month<12){
  console.log("Осень");
}
else {
  console.log("Невозможно определить время года");
}

//Задание 3

let str = "abcde";
if (str.charAt(0)==="a"){
  console.log("Да");
}
else{
  console.log("Нет");
}

//Задание 4

let str1="42345";
if (str1.charAt(0)==1 || str1.charAt(0)==2 || str1.charAt(0)==3){
  console.log("Да");
}
else{
  console.log("Нет");
}

//Задание 5

let str2 = "929";
let sum=0;
for (let i=0; i<str2.length;i++){
  sum+=parseInt(str2.charAt(i));
}
console.log(sum);

//Задание 6

let str3 = "721451";
let sumOnePart=0;
let sumTwoPart=0;
for (let i=0; i<str3.length;i++){
(i<3) ? sumOnePart+=parseInt(str3.charAt(i)):sumTwoPart+=parseInt(str3.charAt(i));
}
if (sumOnePart===sumTwoPart) {
  console.log("Да");
}
else{
  console.log("Нет");
} 

//Циклы while и for
//Задание 1

let count = 0;

while (count<100){
  count++;
  console.log(count);
}

for (let i=1;i<=100;i++) {
  console.log(i);
}

//Задание 2

let count1 = 10;

while (count1<33){
  count1++;
  console.log(count1);
}

for (let i=11;i<=33;i++) {
  console.log(i);
}

//Задание 3

let count2=0;

while (count2<=100){
  if (count2%2 ===0){
    console.log(count2);
  }
  count2++;
}

for (let i=0;i<=100;i++) {
  if (i%2 ===0){
    console.log(i);
  }
}

//Задание 4

let count3=0;
let total=0;

while (count3<100){
  count3++;
  total+=count3;
}
console.log(total);

let totalSum=0;

for (let i=1;i<=100;i++){
  totalSum+=i;
}
console.log(totalSum);

//задание из класса

let h = 11;
const firstNumber=1;
let message = '';
while (--h>=firstNumber){
  message += `${h}${h !== firstNumber ? ', ': ''}`;
}
console.log (message);