// // variable은 -root 와 같은 역할을함
// // 사용 양식 : const(값 업데이트가 필요 없을떄),let(값이 변경이 필요할때) 이름 = 값 ;
// let a = 5;
// const b = 2;

// // 자바스크립트는 첫 단어 소문자 그리고 두번째 단어는 대문자
// // 방법 : Myname (X) , myName(O)
// let myName = "nico";

// //  괄호 안에 있는 것은 문자열(String)Text
// //  괄호가 없는 것은 정수(Integer),소수(Float)를 나타냄
// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log("hello " + myName);

// myName = "nicolas";

// console.log("your new name is " + myName);

// // --------------------------------------------------------------

// // ture = 켜져있어요 , false = 꺼져있어요
// // null = 여기에는 값이 없어요 , underfined = 자리는 있지만 값이 없어요 정의되지 않음
// const amIFat = null;
// let somthing;
// console.log(somthing, amIFat);

// // --------------------------------------------------------------

// // array 그룹으로 묶는 방법
// // 예 : const days0fWeek = [mon, tue, wed, thu, fri, sat, sun];
// const mon = "mon";
// const tue = "tue";
// const wed = "wde";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";
// const sun = "sun";

// const days0fWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// // 컴퓨터는 0부터 숫자를 샘
// // Get Item from Array
// console.log(days0fWeek);

// //
// //  Add one more day to the array
// days0fWeek.push("sun");
// console.log(days0fWeek);

// // --------------------------------------------------------------

// const playerName = "nico";
// const playerPoints = 121212;
// const playerHandsome = false;
// const playerFat = "little bit";

// // object로 묶는 방법
// const player = {
//   name: "nico",
//   points: 10,
//   fat: true,
// };

// console.log(player);
// player.fat = false;
// player.points = player.points + 200;
// player.lastName = "jun";
// console.log(player.points);

// // --------------------------------------------------------------

// // function

// function sayHello(nameOfPerson, age) {
//   // 값
//   console.log("Hello my name is" + nameOfPerson + " and I'm " + age);
// }

// sayHello("nico", 15);
// sayHello("dal", 23);
// sayHello("lynn", 17);

// function plus(a, b) {
//   console.log(a + b);
// }

// function divide(a, b) {
//   console.log(a / b);
// }

// plus(8, 60);
// divide(978, 2);

//

// const player = {
//   name: "nico",
//   sayHello: function (othePersonName) {
//     console.log("hello!" + othePersonName + " nice meet you!");
//   },
// };

// console.log(player.name);
// player.sayHello("lynn");
// player.sayHello("nico");
// player.sayHello("jun");

// const toBuy = ["me", "to", "baby"];

// console.log(toBuy);
// toBuy[2] = "water";
// console.log(toBuy);
// toBuy.push("one");
// console.log(toBuy);

// const player = {
//   name: "nico",
//   age: 21,
// };

// console.log(player);
// player.name = "JunYoung";
// console.log(player);
// player.sexy = "soon";
// console.log(player, console);

//
// const caclulator = {
//   plus: function (a, b) {
//     return a + b;
//   },
//   minus: function (a, b) {
//     return a - b;
//   },
//   times: function (a, b) {
//     return a * b;
//   },
//   divide: function (a, b) {
//     return a / b;
//   },
//   power: function (a, b) {
//     return a ** b;
//   },
// };

// const plusResult = caclulator.plus(2, 3);
// const minusResult = caclulator.minus(plusResult, 10);
// const timesResult = caclulator.times(10, minusResult);
// const divideResult = caclulator.divide(timesResult, plusResult);
// const powerResult = caclulator.power(divideResult, minusResult);

// console.log(plusResult);

// const age = parseInt(prompt("How old are you?"));

// if (isNaN(age) || age < 0) {
//   console.log("please write a real positive number");
// } else if (age < 18) {
//   console.log("You are too young.");
// } else if (age >= 18 && age <= 50) {
//   console.log("You can drink");
// } else if (age > 50 && age <= 80) {
//   console.log("You should exercise");
// } else if (age === 100) {
//   console.log("wow you are wise");
// } else if (age > 80) {
//   console.log("You can do whatever you want.");
// }

// if ((a && b) || (c && d)) {
// }
