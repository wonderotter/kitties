// if (10 > 15) {
//   console.log("hello its true");
// } else {
//   console.log("hello its false");
// }

// const time = 10;

// if (time < 12) {
//   console.log('Good morning');
// } else if (time >= 12 && time < 18) {
//   console.log('Good day');
// } else {
//   console.log('Good evening');
// }

// (time < 12) ? console.log('Good morning') : console.log('Good day');


// let userName;
// let userAge = 20;
// if (userAge > 18) {
//   userName = 'Adult';
// } else {
//   userName = 'Kid';
// }
// console.log(userName)



// let userAge = 5;
// let userName = userAge > 18 ? 'Adult' : 'Kid';
// console.log(userName);


// let greeting = 'Hello dog, ';
// let howAreYou = 'How are you?';

// let sayHi = greeting + howAreYou;

// let sayHi = `${greeting}${howAreYou}`
// console.log(sayHi);



// function sayHi() {
//   console.log('Hello dear cute user!');
// }


// const sayHi = function () {
//   console.log('Hello dear cute user!');
// }

// sayHi()


// function sayHi(userName) {
//   console.log(`hello, ${userName} how are you?`)
// }

// sayHi('Dillan')
// sayHi('Allen')
// sayHi('Dex')


// function sum(a, b) {
//   const result = a * b;
//   return result
// console.log(result)
// }

// let rex = sum(600, 565);
// console.log(rex);

// function sum(a, b) {
//   return a + b;
// }

// function doSmth(test) {
//   let x = 34;
//   let y = 15;
//   let result = test(x, y)
//   console.log(result);
// }

// doSmth(sum);


// function sayHi(name) {
//   console.log(`Hello, ${name}! How are you?`);
// };

// sayHi('Dog');

// const arrowHi = (name) => {
//   console.log(`Hello, ${name}! How are you?`);
// };

// arrowHi('Cat');

// function summ(a, b) {
//   const result = a + b;
// }

// const summ = (a, b) => a + b;
// const res = summ(16, 45);
// console.log(res);


// const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];
// console.log(autoBrands[3]);
// console.log(autoBrands.length);

// push - add in the end
// const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];
// autoBrands.push('Nissan')
// console.log(autoBrands);

// splice delete elem [start, deleteCount]
// const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];
// autoBrands.splice(2, 2)
// console.log(autoBrands);

// for (let item of autoBrands) {
//   console.log(item);
// }

// const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];

// autoBrands.forEach(function (item, index) {
//   console.log(`${item} => ${index}`);
// })


// let arr = ['Toyota', 'Mazda', 'Opel'];
// arr.push('BMW');
// arr.splice(1, 2, 'VAZ');

// console.log(arr);

//                                                                taska Палиндром
// написать функцию которая проверяет является ли строка палиндромом/ вернуть true или false/

// function checkPalindrom(word) {
//     // нижн регистр
//     word = word.toLowerCase();
//     // строка в масив
//     let checWord = word.split('');
//     // развернуть массив
//     checWord = checWord.reverse();
//     // объедением
//     checWord = checWord.join('');

//     if (word === checWord)
//         return true;
//     else return false;

//     return checWord;
// }
// console.log(checkPalindrom('alla'));

// оптимизация

// const palindrom = word => {
//     word = word.toLowerCase();
//     return word === word.split('').reverse().join('');
// }
// console.log(palindrom('hello'));





