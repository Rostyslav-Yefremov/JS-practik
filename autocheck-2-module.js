// Task 1/32
function checkAge(age) {
  if (age >= 18) {
    // Change this line
    return 'You are an adult';
  }

  return 'You are a minor';
}

// 2
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  // Change code below this line

  if (password === ADMIN_PASSWORD) {
    return 'Welcome!';
  }
  return 'Access denied, wrong password!';
  // Change code above this line
}

// TASK 3 (warehouse of goods 3.0)

function checkStorage(available, ordered) {
  // Change code below this line

  if (ordered === 0) {
    return 'Your order is empty!';
  }
  if (ordered > available) {
    return 'Your order is too large, not enough goods in stock!';
  }
  return 'The order is accepted, our manager will contact you';

  return message;
  // Change code above this line
}

// TASK 4

const fruits = [
  'apple',
  'plum',
  'pear',
  'orange',
];

//TASK 5(Accessing elements by index)
// Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных
// скобок.

const fruits = [
  'apple',
  'plum',
  'pear',
  'orange',
];
console.log(fruits.length);
const firstElement = console.log(fruits[0]);
const secondElement = console.log(fruits[1]);
const lastElement = console.log(fruits[3]);

// TASK 6 (Overriding the value of an element)
// Переопредели значения элементов с индексами 1 и 3. Замени "plum" на "peach",
// а "orange" на "banana".

// const fruits = ["apple", "plum", "pear", "orange"];

const fruits = [
  'apple',
  'plum',
  'pear',
  'orange',
];

fruits[1] = 'peach';
fruits[3] = 'banana';

// TASK 7 (Array length)
// Объяви переменную fruitsArrayLength и присвой ей длину
// массива fruits используя свойство length.

const fruits = [
  'apple',
  'peach',
  'pear',
  'banana',
];

// Change code below this line
const fruitsArrayLength = fruits.length;

// TASK 8(Last item index)
// Объяви две перемнные:
// lastElementIndex	Мндекс последнего элемента масcива fruits через длина_массива - 1
// lastElement	Значение последнего элемента массива

// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// console.log(lastElementIndex);
// const lastElement = fruits[lastElementIndex];
// console.log(lastElement);

// TASK9(Edge elements of the array)
// Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив
// элементов произвольной длины.Функция должна возвращать массив из двух
// элементов - первого и последнего элемента параметра array.

function getExtremeElements(array) {
  // Change code below this line
  const lastElementIndex = array.length - 1;
  const firstElement = array[0];
  const lastElement = array[lastElementIndex];
  return [firstElement, lastElement];

  // Change code above this line
}

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// Change code below this line

// TASK10(The split () string method)
// Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в
// переменной words результат разделения строки message по разделителю delimeter - массив
// строк.

function splitMessage(message, delimeter) {
  let words;
  // Change code below this line
  words = message.split(delimeter);
  // Change code above this line
  return words;
}

// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""))
// console.log(splitMessage("best_for_week", "_"))

// TASK 11 (jewelry engraving)
// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену
// гравировки, в зависимости от количества слов и цены за слово.
// Объявлена функция calculateEngravingPrice(message, pricePerWord).Эта функция принимает
// строку, состоящую из слов разделённых только пробелами(параметр message) и цену
// гравировки одного слова(параметр pricePerWord).
// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в
// строке.

function calculateEngravingPrice(
  message,
  pricePerWord,
) {
  // Change code below this line
  let price;
  price =
    message.split(' ').length * pricePerWord;
  // price = message.length * pricePerWord;

  // Change code above this line
  return price;
}

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));

// TASK 12( join() array method )
// Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в
// переменной string результат соединения элементов массива array c разделителем
// delimeter - строку.

function makeStringFromArray(array, delimeter) {
  let string;
  // Change code below this line

  string = array.join(delimeter);

  // Change code above this line
  return string;
}

// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

// TASK 4

// Функция formatMessage(message, maxLength)
// принимает строку (параметр message) и форматирует её,
// если длина превышает значение в параметре maxLength.

// function formatMessage(message, maxLength) {
//     // if (maxLength < message.length) {

//         return message.slice(0, maxLength)  + '...';
//     }

//     return message;
// }

// function formatMessage(message, maxLength) {
//     return maxLength < message.length ? message.slice(0, maxLength) + '...' : message;
// }

// console.log(formatMessage("Curabitur ligula sapien", 16)); //возвращает 'Curabitur ligula...'.
// console.log(formatMessage("Curabitur ligula sapien", 23)); //возвращает 'Curabitur ligula sapien'.
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); //возвращает 'Nunc sed turpis...'.
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); //возвращает 'Nunc sed turpis a felis in nunc fringilla'.
// TASK 1
// Напишите функцию pow(x,n), которая возвращает x в степени n.
// Иначе говоря, умножает x на себя n раз и возвращает результат.
// Math.pow()
// TASK 2
// напиши функцию которая будет суммировать соседние числа и пушить их в новый массив

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// TASK 3
// Напишите решение, которое вычисляет сумму
// квадратных корней для всех чисел у которых квадратный корень будет целым числом.

// const arr = [4, 3, 5, 16, 16, 33, 4, 9]
// Результат который должны получить [2, 4, 4, 2, 3]

// Number.isInteger(arr[i])

// TASK 4

// Функция formatMessage(message, maxLength)
// принимает строку (параметр message) и форматирует её,
// если длина превышает значение в параметре maxLength.

// function formatMessage(message, maxLength) {
// }

// formatMessage("Curabitur ligula sapien", 16); //возвращает 'Curabitur ligula...'.
// formatMessage("Curabitur ligula sapien", 23); //возвращает 'Curabitur ligula sapien'.
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15); //возвращает 'Nunc sed turpis...'.
// formatMessage("Nunc sed turpis a feОт GoIT Academy 8 всем:  07:32 PM
// Task 3
// Нужно перебрать объекты и вывести имя лучшего сотрудника
// const findBestEmployee = function(obj) {}

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence
// console.log(
//     findBestEmployee({
//         poly: 12,
//         mango: 17,
//         ajax: 4,
//     }),
// ); // mango
// console.log(
//     findBestEmployee({
//         lux: 147,
//         david: 21,
//         kiwi: 19,
//         chelsy: 38,
//     }),
// ); // lux

// const findBestEmployee = (obj) => Object.entries(obj).sort((a, b) => b[1] - a[1])[0][0];
// Task 1
// Добавить метод getInfo в объект user, который будет возвращать инфу о пользователе в формате
// Name: Peter. Surname: Parker. Age: 22. Position: spider-man.

// const user = {
//     name: 'Peter',
//     surname: 'Parker',
//     age: 22,
//     position: 'spider-man'
// }

// const max = 15;

// for (let i = 0; i < max; i += 1) {
//   console.log(i);
// }

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// let password = '';

// do {
//   password = prompt('Введите пароль длиннее 4-х символов', '');
// } while (password.length < 5);

// console.log('Ввели пароль: ', password);

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
//

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let largeCoin = numbers[0];

// for (const number of numbers) {
//     if (number > largeCoin) {
//         largeCoin = number;
//  }
// }

// console.log('largeCoin', largeCoin);

// TASK 13(slug generator) from 1:50:00 (Lesson 3 Repeta)
// Напиши функцию slugify(title) которая принимает заголовок статьи,
//     параметр title, и возвращает slug, созданный из этой строки.
// Значением параметра title будут строки, слова которых разделены только
// пробелами
// Все символы slug должны быть в нижнем регистре
// Все слова slug должна быть разделены тире

function slugify(title) {
  // Change code below this line
  const slug = title
    .toLowerCase()
    .split(' ')
    .join('-');
  const normalizedString = title.toLowerCase();

  const words = normalizedString.split(' ');

  return slug;
}
//   Change code above this line

// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// TASK 14 (slice() method)
// Дополни код так, чтобы переменные содержали частичные копии исходного
// массива fruits.
// firstTwoEls - массив из первых двух элементов
// nonExtremeEls - массив из всех элементов кроме первого и последнего
// lastThreeEls - массив из трёх последних элементов

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// // Change code below this line
// const firstTwoEls = ;
// const nonExtremeEls = ;
// const lastThreeEls = ;

const fruits = [
  'apple',
  'plum',
  'pear',
  'orange',
  'banana',
];

const firstTwoEls = fruits.slice(0, 2);
console.log(firstTwoEls);
const nonExtremeEls = fruits.slice(1, 4);
console.log(nonExtremeEls);
const lastThreeEls = fruits.slice(-3);
console.log(lastThreeEls);

// TASK FROM REPETA
// напиши скрипт, который считает сумму элементов двух массивов

// const array1 = [20, 30, 10, 12];
// const array2 = [10, 15, 30];

// let total = 0;
// for (let i = 0; i < array1.length; i += 1){
//     total += array1[i];
// }

// for (let i = 0; i < array2.length; i += 1){
//     total += array2[i];
// }

// console.log(total)
// const numbers = array1.concat(array2);
// // console.log(numbers);
// for (const number of numbers) {
//     total += number;
// }

// for (const number of array1.concat(array2)) {
//     total += number;
// }

// console.log(total);

// TASK 15(Concat() metodth)
// Дополни код так, чтобы в переменной allClients получился массив всех
// элементов массивов oldClients и newClients.
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = ; // Change this line

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];
// const allClients = oldClients.concat(newClients); // Change this line
// console.log(allClients);
// // Или новыйметод:
// const allClients = [...oldClients, ...newClients];

// TASK 16 (Array composition)
// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания
// нового массива со всеми элементами двух исходных firstArray и secondArray.Параметр
// maxLength содержит максимально допустимую длину нового массива.
// Если количество элементов нового массива больше maxLength, функция должна вернуть
// копию массива длиной maxLength элементов.В противном случае функция должна вернуть
// новый массив целиком.
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line

//     // Change code above this line
// }

function makeArray(
  firstArray,
  secondArray,
  maxLength,
) {
  const arrays = firstArray.concat(secondArray);
  if (arrays > maxLength) {
    arrays.length = maxLength;
    return arrays;
  }
  return arrays.slice(0, maxLength);
  // Change code above this line
}

// second way
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//     const arrays = firstArray.concat(secondArray).slice(0, maxLength);

//   return arrays;
//     // Change code above this line
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

// TASK 17 ('for' loop)
// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }
// Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end
// включительно.
// const start = 3;
// const end = 7;

// for (let i = ; i <= ; i += ) { // Change this line
//     console.log(i)
// }

// const start = 3;
// const end = 7;

for (let i = start; i <= end; i += 1) {
  // Change this line
  console.log(i);
}

// TASK 18(Sum of numbers 'for' loop)
// Напиши функцию calculateTotal(number), которая принимает целое число(параметр number) и
// возвращает сумму всех целых чисел от единицы и до этого числа.Например, если number
// равно 3, то сумма это 1 + 2 + 3, то есть 6.
// function calculateTotal(number) {
//

//   // Change code above this line
// }

function calculateTotal(number) {
  let sum = 0;
  for (let i = 1; i <= number; i += 1) {
    sum += i;
  }

  return sum;
}
// console.log(calculateTotal(1));
// console.log(calculateTotal(6));
// console.log(calculateTotal(28));
// console.log(calculateTotal(171));
// console.log(calculateTotal(300));

// for (let i = 0; i <= 10; i++) { // выведет 0, затем 1, затем 2
//   console.log(i);
// }

// TASK 19

const fruits = [
  'apple',
  'plum',
  'pear',
  'orange',
];

for (let i = 0; i < fruits.length; i += 1) {
  // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}

// Напиши функцию includes(array, value), которая делает тоже самое, что и метод
// массива массив.includes(значение) - проверяет, есть ли в массиве array значение
// value, возвращая true если есть и false в противном случае.
// При выполнении этой задачи в теле функции includes() нельзя использовать метод
// массив.includes(значение).

function includes(array, value) {
  let i = [];
  for (i = 0; i < array.length; i += 1) {
    // console.log(array[i]);
    return (array[i] += 1);
  }
}

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));

// Запиши условие в инструкции if так, чтобы функция работала правильно.

// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

// Функция checkPassword получает пароль пользователя в параметр password, проверяет
// его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает
// сообщение о результате сравнения.
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат»:
// удали переменную message
// удали else
// код должен работать так же, как и до оптимизации

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//     }

//     return "Access denied, wrong password!";
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение
// о результате.Она принимает два параметра, значения которых будут задаваться во время
// её вызова.

// available - доступное количество товаров на складе
// ordered - количество единиц товара в заказе
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».

// function checkStorage(available, ordered) {
//   // Change code below this line
//   let message;

//   if (ordered === 0) {
//     message = "Your order is empty!";
//   } else if (ordered > available) {
//     message = "Your order is too large, not enough goods in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }

//   return message;
//   // Change code above this line
// }

// function checkStorage(available, ordered) {

//     if (ordered === 0) {
//         return "Your order is empty!";
//     }

//     if (ordered > available) {
//         return "Your order is too large, not enough goods in stock!";
//     }

//     return "The order is accepted, our manager will contact you";
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// Объяви переменную fruits и присвой ей массив фруктов -
//     строк "apple", "plum", "pear" и "orange".

// const fruits = ["apple", "plum", "pear", "orange"];

// Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных
// скобок.
// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0];
// console.log(firstElement);
// const secondElement = fruits[1];
// console.log(secondElement);
// const lastElement = fruits[fruits.length -1];
// console.log(lastElement);

// Переопредели значения элементов с индексами 1 и 3. Замени "plum" на "peach", а
// "orange" на "banana".

// const fruits = ["apple", "plum", "pear", "orange"];

// for (let fruit of fruits) {
//     console.table(fruit);
// }

// fruits[1] = 'peach';
// console.log(fruits[1]);
// fruits[fruits.length - 1] = 'banana';
// console.log(fruits[fruits.length - 1]);

// Объяви переменную fruitsArrayLength и присвой ей длину массива fruits используя
//  свойство length.

// const fruits = ["apple", "peach", "pear", "banana"];

// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);

// const fruits = ["apple", "peach", "pear", "banana"];
// // Объяви две переменные:

// const lastElementIndex = fruits.length - 1;
// console.log(lastElementIndex);

// const lastElement = fruits[lastElementIndex];
// console.log(lastElement);

// Напиши функцию getExtremeElements(array) которая принимает один параметр
// array - массив элементов произвольной длины.Функция должна возвращать массив из
// двух элементов - первого и последнего элемента параметра array.

// function getExtremeElements(array) {
//     const newArray = [];

//     for (const elements of array) {
//         console.log(elements);
//         // newArray.push(elements[0])
//         // newArray.push(array[0]);
//     }
//     const firstElement = array[0];
//     const lastElementIndex = array.length - 1;
//     // console.log(lastElementIndex);
//     const lastElement = array[lastElementIndex];
//     // console.log(lastElement);
//     newArray.push(firstElement, lastElement);

//     return newArray;
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в
// переменной words результат разделения строки message по разделителю delimeter -
//     массив строк.

// function splitMessage (message, delimeter) {
//     // const messageArray = [];
//     const messageArray = message.split(delimeter);

//     return messageArray;
// }

// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));

// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену
// гравировки, в зависимости от количества слов и цены за слово.
// Объявлена функция calculateEngravingPrice(message, pricePerWord).Эта функция
//  принимает строку, состоящую из слов разделённых только пробелами(параметр message)
//   и цену гравировки одного слова(параметр pricePerWord).
// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в
// строке.

// function calculateEngravingPrice(message, pricePerWord) {
//     //принять сообщение в переменную и разделить слова по пробелу в массив
//     const wordsArray = message.split(" ");
//     let totalPrice = 0;

//     for (word of wordsArray) {
//         word = pricePerWord;
//         totalPrice += word;
//     }

//     return totalPrice;

// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));

// Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала
// в переменной string результат соединения элементов массива array c разделителем
// delimeter - строку.

// function makeStringFromArray(array, delimeter) {
//     // создать переменную для строки, принять array,
//     //  преобразовать из него строку методом джоин
//     const transformedArray = array.join(delimeter);

//     return transformedArray;
// }

// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title,
//     и возвращает slug, созданный из этой строки.
// Значением параметра title будут строки, слова которых разделены только пробелами
// Все символы slug должны быть в нижнем регистре
// Все слова slug должна быть разделены тире

// function slugify(title) {
// // привести в нижний регистр title
//     const normalizedTitle = title.toLowerCase();

//     // сделать из тайтла массив по пробелу
//     const transformeredArray = normalizedTitle.split(" ");

//     // создать слаг из массива с помощью джоина
//     const slugTitle = transformeredArray.join("-")
//     return slugTitle;
// }

// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// Дополни код так, чтобы переменные содержали частичные копии исходного массива
// fruits.
// firstTwoEls - массив из первых двух элементов
// nonExtremeEls - массив из всех элементов кроме первого и последнего
// lastThreeEls - массив из трёх последних элементов

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// console.log(firstTwoEls);
// const nonExtremeEls = fruits.slice(1, -1);
// console.log(nonExtremeEls);
// const lastThreeEls = fruits.slice(2);
// console.log(lastThreeEls);

// Дополни код так, чтобы в переменной allClients получился массив всех элементов
//  массивов oldClients и newClients.

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line
// console.log(allClients);

// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания
// нового массива со всеми элементами двух исходных firstArray и secondArray.
// Параметр maxLength содержит максимально допустимую длину нового массива.
// Если количество элементов нового массива больше maxLength, функция должна
// вернуть копию массива длиной maxLength элементов.В противном случае функция
// должна вернуть новый массив целиком.

// function makeArray(firstArray, secondArray, maxLength) {
// // создать новій массив из первіх двух параметров с помощью конкат
//     const commonArray = firstArray.concat(secondArray);
//     // return commonArray;
//     if (commonArray.length >= maxLength) {
//         const validArray = commonArray.slice(0, maxLength);
//         return validArray;
//     }

// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

// Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start
// до end включительно.

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }

// Напиши функцию calculateTotal(number), которая принимает целое число
// (параметр number) и возвращает сумму всех целых чисел от единицы и до этого
// числа.Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

// function calculateTotal(number) {
//     let total = 0;

//     for (let i = 0; i <= number; i += 1) {
//         total += i;
//     }
//     return total;
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));

// Дополни код цикла for так, чтобы он последовательно логировал все элементы
// массива fruits.

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i +=1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// TASK 20

// Напиши функцию calculateTotalPrice(order), которая принимает один параметр
// order - массив чисел, и рассчитывает общую сумму его элементов.Общая сумма
// элементов должна сохраняться в переменной total, которая возвращается, как
// результат работы функции.

function calculateTotalPrice(order) {
  let total = 0;

  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }
  return total;
}

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// Task 21

// Напиши функцию findLongestWord(string) которая принимает произвольную
// строку состоящую только из слов разделённых пробелом(параметр string) и
// возвращает самое длинное слово в этой строке.

function findLongestWord(string) {
  const convertedString = string.split(' ');
  let wordLength = convertedString[1].length;
  let longestWord;

  for (
    let i = 0;
    i < convertedString.length;
    i += 1
  ) {
    if (convertedString[i].length > wordLength) {
      longestWord = convertedString[i];
      return longestWord;
    }
  }
}
//  второе решение и можно через фор оф
function findLongestWord(string) {
  const convertedString = string.split(' ');
  let longestWord = '';
  for (
    let i = 0;
    i < convertedString.length;
    i += 1
  ) {
    if (
      longestWord.length <
      convertedString[i].length
    ) {
      longestWord = convertedString[i];
    }
  }
  return longestWord;
}

// function findLongestWord(string) {
//     const convertedString = string.toLowerCase().split(' ');
//     let longestWord = '';

//     for (const word of convertedString) {
//         // console.log(word);
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));

// TASK 22

// Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала
// массив всех целых чисел от значения min до max.

function createArrayOfNumbers(min, max) {
  const numbers = [];

  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }
  return numbers;
}

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));

// TASK 23

// Напиши функцию filterArray(numbers, value), которая принимает массив чисел
// (параметр numbers) и возвращает новый массив, в котором будут только те
// элементы массива numbers, которые больше чем значение параметра value(число).

function filterArray(numbers, value) {
  const modifiedArray = [];
  for (i = 0; i <= numbers.length; i += 1) {
    if (numbers[i] > value) {
      modifiedArray.push(numbers[i]);
    }
  }
  return modifiedArray;
}

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// Task 24

// Функция checkFruit(fruit) принимает строку с названием фрукта(параметр fruit),
// и проверяет есть ли такой фрукт в массиве fruits.
// Дополни код функции так, что если:
// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.

function checkFruit(fruit) {
  const fruits = [
    'apple',
    'plum',
    'pear',
    'orange',
  ];

  return fruits.includes(fruit);
}

// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));
// console.log(checkFruit("pear"));
// console.log(checkFruit("Pear"));
// console.log(checkFruit("apple"));

// Task 25

// Общими элементами массивов называют те элементы, которые присутствуют во всех
// массивах.
// Например, в двух массивах[1, 3, 5] и[0, 8, 5, 3] общими будут числа 3 и 5,
// т.к.они присутствуют в обоих исходных массивах.А числа 0, 1 и 8 присутствуют
// только в одном из массивов.
// Напиши функцию getCommonElements(array1, array2) которая получает два массива
//  произвольной длины в параметры array1 и array2, и возвращает новый массив,
// состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

function getCommonElements(array1, array2) {
  const arrayOfMatches = [];

  for (let i = 0; i < array1.length; i += 1) {
    const comparedItens = array2.includes(
      array1[i],
    );

    if (comparedItens) {
      arrayOfMatches.push(array1[i]);
    }
  }
  return arrayOfMatches;
}

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// Task 26

// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

function calculateTotalPrice(order) {
  let total = 0;

  for (const price of order) {
    total += price;
  }
  return total;
}

//     console.log(calculateTotalPrice([12, 85, 37, 4]));
//     console.log(calculateTotalPrice([164, 48, 291]));
//     console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
//     console.log(calculateTotalPrice([]));

// Task 27

// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на
// for...of.

function filterArray(numbers, value) {
  const filteredNumbers = [];

  for (const number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }
  return filteredNumbers;
}

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// Task 28

// Дополни выражения остатка от деления так, чтобы код проходил тесты.

const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 4;
const d = 12 % 7;
const e = 8 % 3;

// console.log(a, b, c, d, e);

// Task 29

// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных
//  чисел от start до end.Чётным считается число которое делится на 2 без
// остатка(10 % 2 === 0).

function getEvenNumbers(start, end) {
  let evennumbers = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) evennumbers.push(i);
  }
  return evennumbers;
}

// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));

// Task 30

// Дополни код так, чтобы в переменную number записывалось первое число от start
// до end, которое делится на 5 без остатка.

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}

// console.log(number);

//  все числа деленніе на 5 без остатка собрал в массив
// const start = 6;
// const end = 27;
// let number = [];

// // for (let i = start; i < end; i += 1) {
// //   if (i % 5 === 0) {
// //       number.push(i);
// //   }
// // }

// // console.log(number);

// // Task 31

// // Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:
// // возвращала первое число от start до end, которое делится на divisor без остатка
// // не использовала оператор break
// // не использовала переменную number

// function findNumber(start, end, divisor) {
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }

// // console.log(findNumber(2, 6, 5));
// // console.log(findNumber(8, 17, 3));
// // console.log(findNumber(6, 9, 4));
// // console.log(findNumber(16, 35, 7));

// // Task 32

// // Напиши функцию includes(array, value), которая делает тоже самое, что и метод
// // массива массив.includes(значение) - проверяет, есть ли в массиве array значение
// // value, возвращая true если есть и false в противном случае.
// // При выполнении этой задачи в теле функции includes() нельзя использовать метод
// // массив.includes(значение).

// function includes(array, value) {
//   //  iterate over the array
//   for (i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));
