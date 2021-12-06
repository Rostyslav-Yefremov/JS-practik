// Module 6

// const arr = [
// { name: "Albert", surname: "Einstein", born: 1879, dead: 1955, id: 1 },
// { name: "Isaac", surname: "Newton", born: 1643, dead: 1727, id: 2 },
// { name: "Galileo", surname: "Galilei", born: 1564, dead: 1642, id: 3 },
// { name: "Marie", surname: "Curie", born: 1867, dead: 1934, id: 4 },
// { name: "Johannes", surname: "Kepler", born: 1571, dead: 1630, id: 5 },
// { name: "Nicolaus", surname: "Copernicus", born: 1473, dead: 1543, id: 6 },
// { name: "Max", surname: "Planck", born: 1858, dead: 1947, id: 7 },
// { name: "Katherine", surname: "Blodgett", born: 1898, dead: 1979, id: 8 },
// { name: "Ada", surname: "Lovelace", born: 1815, dead: 1852, id: 9 },
// { name: "Sarah E.", surname: "Goode", born: 1855, dead: 1905, id: 10 },
// { name: "Lise", surname: "Meitner", born: 1878, dead: 1968, id: 11 },
//     { name: "Hanna", surname: "Hammarström", born: 1829, dead: 1909, id: 12 },
//     { name: "Pierre", surname: "Curie", born: 1859, dead: 1906, id: 13}
// ];

// let result = arr.filter(({born}) => born >= 1800 && born <= 1900)
// console.log("1", result)

// result = arr.reduce((acc, obj) => {
//     // console.log(acc, obj)
//     // console.log(obj.dead - obj.born)
//     acc += (obj.dead - obj.born);
//     return acc;
// }, 0)

// console.log("2", result)

// result = arr.reduce((acc, { dead, born }) => acc + (dead - born), 0)

// console.log("2.1", result)

// result = arr.sort((a, z) => ((a.surname + " " + a.name).localeCompare((z.surname + " " + z.name)))) 

// console.log("3", result)

// result = arr.sort((min, max) => ((min.dead - min.born) - (max.dead - max.born)));

// console.log("4", result)

// result = arr.map((obj) => {
//     obj.age = obj.dead - obj.born;
//     return obj;
    
// }).sort((min, max) => min.age - max.age)
    
// console.log("4.1", result)

// let result = arr.filter(
//     scientist => 1400 <= scientist.born && scientist.born >= 1699,
// );
// console.log('5', result);
// result = arr.sort((a, b) => a.born - b.born);
// result = result[result.length - 1];
// console.log('6', result);
// result = arr.sort((a, b) => b.born - a.born)[0];
// console.log('6.1', result);
// result = arr.find(
//     ({ name, surname }) => `${name} ${surname}` === 'Albert Einstein',
// ).born;
// console.log('7', result);
// result = arr.reduce((acc, { name, surname, born }) => {
//     if (`${name} ${surname}` === 'Albert Einstein') {
//         acc = born;
//     }
//     return acc;
// }, 0);
// console.log('7.1', result);

// result = arr.filter(({ surname }) => surname[0] === "C");
// console.log('8', result);

// result = arr.filter(({ name }) => name[0] !== "A");
// console.log('9', result);

// result = arr.sort((a, b) => b.born - a.born).filter((obj, index, array) => obj === array[0] || obj === array[array.length - 1]);
// console.log('10', result);

// result = arr.filter(({ name, surname }) => name[0] === surname[0]);
// console.log('11', result);

// result = arr.every(({ dead }) => dead >= 1800 && dead < 1900);
// console.log('12', result);


// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst);

// const numbers = [3, 6, 4, 8, 2, 45, 65, 28, 15, 36, 12, 10];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//     console.log('Числа погнали', numbers[i]);

//     if (numbers[i] %2 === 0) {
//         console.log(`Ростик, ты вывел чётное число тут ${numbers[i]}`);
//         total += numbers[i];
//     }
// }

// console.log('Сумма всех чётных', total)

// for (const number of numbers) {
//     // console.log('Числа погнали', number);

//     if (number %2 === 0) {
//         console.log(`Ростик, ты вывел чётное число тут ${number}`);
//         total += number;
//     } else {
//         console.log(`Оооооо, а тут ты вывел НЕчётное число ${number}`);
//     }
// }

// console.log('Сумма всех чётных', total)


// const keys = [3, 6, 4, 8, 78, 34];
// const key = 65;

// const message = keys.includes(key) ? `Даааа, это ${key} есть` : `Жаль, но этого ${key} нет`;

// console.log(message)





// console.log('После вызова')

// const password = "jqueryismyjam";


// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return console.log("Welcome!");
//   } 
//   return console.log("Access denied, wrong password!");
//   // Change code above this line
// }

// checkPassword(password)


// const fruits = ["apple", "peach", "pear", "banana"];

// console.log(fruits[1])


// function getExtremeElements(array) {
//   let last = [array[0], array[array.length - 1]];// Change code below this line
// return last;

//   // Change code above this line
// }

// const array = ["apple", "peach", "pear", "banana"];

// function getExtremeElements(array) {
//   let last = array.splice(1, array.length - 2)
//     return console.log(array);
//   // Change code above this line
// }

// getExtremeElements(array)


// function calculateEngravingPrice(message, pricePerWord) {
//   let calc = message.split(' ') * pricePerWord;
//   return console.log(calc);
// }





// const calculateEngravingPrice = function(message, pricePerWord) {
//     return console.log( message.split("").length * pricePerWord);
// };

// console.log(
//     calculateEngravingPrice(
//         "Prsos eeeee",
//         10
//     )
// ); // 80

// console.log(
//     calculateEngravingPrice(
//         "Proin sociis natoque et magnis parturient montes mus",
//         20
//     )
// ); // 160

// console.log(calculateEngravingPrice("Donec orci lectus aliquam est", 40)); // 200

// console.log(calculateEngravingPrice("Donec orci lectus aliquam est", 20)); // 100


// const superCars = ['bmw', 'audi', 'mers', 'volvo']

// for (const car of superCars) {
//   if (car === 'audi' || car === 'bmw') {
//     console.log(`Это крутая тачка - ${car}`);
//     continue;
//   }
// console.log(`Ну такое - ${car}`)
// }


// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line

// const totalPrice = message.split(' ').length * pricePerWord;
  
//   return console.log(totalPrice);

//    // Change code above this line
// }


// calculateEngravingPrice("JavaScript is in my blood", 10) 
// calculateEngravingPrice("JavaScript is in my blood", 20) 
// calculateEngravingPrice("Web-development is creative work", 40) 
// calculateEngravingPrice("Web-development is creative work", 20) 


// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = console.log(fruits.slice(0,2));
// const nonExtremeEls = console.log(fruits.slice(1, -1));
// const lastThreeEls = console.log(fruits.slice(-3));

// console.log(fruits)


// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// console.log(oldClients)



// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
// const newArray = firstArray.concat(secondArray);

// if(newArray.length > maxLength){
//   return console.log('Условие тру', newArray.slice(0, maxLength));
// }
//   return console.log('Условие фолс', newArray);
//     // Change code above this line
// }
  

// makeArray(["Earth", "Jupiter", "Rock"], ["Neptune", "Uranus"], 3)



// function findLongestWord(string) {
//   // Change code below this line
//   console.log('Array',string);
//   const words = string.split(' ');
//   console.log('Array', words);
//   let bigWord = '';
//   for(let i = 0; i < words.length; i += 1) {
//     if(words[i].length > bigWord.length){
//      bigWord = words[i]; 
//     }
//   }
// return console.log(bigWord, bigWord.length);
// }

// findLongestWord('Google do a dodikkk barrel roll')


// function findLongestWord(string) {
//   // Change code below this line
// const words = string.split(' ');
//   let langWord = '';
//   for(const word of words) {
//     if(word.length > langWord.length){
//       langWord = word;
//     }
//   }
//  return langWord;
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");


// function findLongestWord(str) {
//   var strSplit = str.split(' ');
//   var longestWord = 0;
//   for(var i = 0; i < strSplit.length; i++){
//     if(strSplit[i].length > longestWord){
// 	longestWord = strSplit[i].length;
//      }
//   }
//   return console.log(longestWord);
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");

// function findLongestWord(string) {
  
//   const words = string.split(' ');
//   let bigWord = '';
//   for(let i = 0; i < words.length; i += 1) {
//     if(words[i].length > bigWord.length){
//      bigWord = words[i]; 
//     }
//   }
// return console.log(bigWord, bigWord.length);
// }

// findLongestWord('rty Google do a dodfffkk barrel roll')



// const fruits = ['apple', 'banana', 'orange'];
// const meat = ['poultry', 'beef', 'fish'];
// const vegetables = ['potato', 'tomato', 'cucumber'];

// const food = [...fruits, ...meat, ...vegetables];
// console.log(food)

// const fruits = ['banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple',];
// const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
// console.log(randomFruit);

// 23 task

// function filterArray(numbers, value) {
//    // Change code below this line
// const newArrayNumbers = [];
//   for(let i = 0; i <= numbers.length; i += 1) {
//     if(numbers[i] > value){
//       newArrayNumbers.push(numbers[i]);
//     }
//   }
// console.log(numbers.length)
// return console.log(newArrayNumbers);
//   // Change code above this line
// }


// filterArray([12, 24, 8, 41, 76], 20)

// // 24 task

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }


// 25 task

// function getCommonElements(array1, array2) {
//   // Change code below this line
// const newArray = [];
// for(let i = 0; i < array2.length; i += 1){
//   if(array1.includes(array2[i])) {
//    newArray.push(array2[i]);
//   }
// }
// return console.log(newArray);
//  // Change code above this line
// }

// getCommonElements([24, 4, 5, 12, 27, 3], [12, 4, 5, 7, 9, 8, 3, 36, 27])

// const planets = ["Earth", "Mars", "Venus"];

// for (const planet of planets) {
//   console.log(planet);
// }

// 26 task

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const ord of order) {
//     total += ord;
//   }

//   // Change code above this line
//   return console.log(total);
// }


// calculateTotalPrice([164, 48, 291])

// 27 task

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }


// 29 task

// function getEvenNumbers(start, end) {
//    // Change code below this line
// const evenNumbers = [];
//   for(let i = start; i <= end; i += 1) {
//     if(i % 2 === 0){
//       evenNumbers.push(i);
//     }
//   }
// return console.log(evenNumbers);

//   }
// getEvenNumbers(4, 13)


// 30 task

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// 31 task

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
//   // Change code above this line
// }

// 32 task

// function includes(array, value) {
//   // Change code below this line
// for(const arr of array) {
//  if(arr === value) {
//    return true;
// }
// }
//   return false;
//   // Change code above this line
// }


// const sumNumbers = function (x, y, ...arr) {
//   // console.log(x, y);
//   console.log(arr);

// }

// sumNumbers(82, 45, 2)
// // sumNumbers(3, 35)
// // sumNumbers(13, 7, 24,357,23,4)
// // sumNumbers(32, 15, 58, 44,32,35,5,8)

//   console.log('Вот что ты тут наделал');

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };

// const location = user.location;
// console.log(location); // Объект location

// const country = user.hobbies.length;
// console.log(country); // 'Jamaica'

// user.location.city = 'Paris';
// user.name = 'Jack';
// console.log(user)
// user.hobbies.push('Haha')
// console.log(user.hobbies)


// Привет Дорогие и Любимые. Ловите еще интересную задачку для практики Обработать массив,
// const arr = [“BEST”, “the”, “foo”, “is”,  “JS” ]  развернуть массив,
// вырезать foo, перевести его в строку разделенную пробелами.
// Всех обнимаю:воздушный_поцелуй:

// const arr = ['BEST', 'the', 'foo', 'is', 'JS'];

// let newArrayString = arr.splice(2, 1).reverse().join(' ');

// for (const ar of arr) {
//   console.log(ar)
// arr.reverse().join('--');
//   console.log(ar)
  
// }
// console.log(newArrayString);
// // console.log(arr.join('--'));

// const arr = ["BEST", "the", "foo", "is", "JS"];
// console.log(...arr);
// for (let i = 0; i <= arr.length; i -= 1) {
//   console.log(i)
//   if (arr[i] === "foo") {
//     arr.splice(i, 1);
//   }
// }
// console.log(arr.reverse().join(" "));

// const arr = ["BEST", "the", "foo", "is", "JS"];
// const indexFoo = arr.reverse().indexOf('foo');
// arr.splice(indexFoo, 1);
// const str = arr.join(" ")
// console.log(str);


// console.log('5' + - + - - + - -  + + - + - + - + - - - '2');


// function multiply(a, b){
//   return  a * b;
// }

// multiply(2, 2);

// // ✅ Логически и синтаксически сгруппированные сущности
// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Это метод объекта
//   getBooks() {
//     console.log("Этот метод будет возвращать все книги - свойство books");
//   },
//   // Это метод объекта
//   addBook(bookName) {
//     console.log("Этот метод будет добавлять новую книгу в свойство books");
//   },
// };

// // Вызовы методов
// bookShelf.getBooks();
// bookShelf.addBook("Новая книга");

// console.log(bookShelf.books)

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     console.log('allo', this);
//   },
// };

// // Перед точкой стоит объект bookShelf,
// // поэтому при вызове метода, this будет хранить ссылку на него.
// bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}


const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
  // Ключ
  console.log(key);
  // Значение свойства с таким ключом
  console.log(book.author[key]);
}