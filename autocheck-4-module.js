// Task 1/48

// function makePizza() {
//   return 'Ваша пицца готовится, ожидайте.';
// }
// // Пиши код ниже этой строки

// const result = makePizza();
// const pointer = makePizza;

// Task 2/10

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// Task 3/10

// function makePizza(pizzaName, callback) {
//   console.log(
//     `Pizza ${pizzaName} is being prepared, please wait...`,
//   );
//   callback(pizzaName);
// }

// makePizza(
//   'Royal Grand',
//   function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
//   },
// );

// makePizza(
//   'Ultracheese',
//   function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`);
//   },
// );

// Task 4/10

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     for (const pizza of this.pizzas) {
//       if (pizza.includes(pizzaName)) {
//         return onSuccess(pizzaName);
//       }
//     }
//     return onError(
//       `There is no pizza with a name ${pizzaName} in the assortment.`,
//     );
//   },
// };

// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// pizzaPalace.order(
//   'Smoked',
//   makePizza,
//   onOrderError,
// );
// pizzaPalace.order(
//   'Four meats',
//   makePizza,
//   onOrderError,
// );
// pizzaPalace.order(
//   'Big Mike',
//   makePizza,
//   onOrderError,
// );
// pizzaPalace.order(
//   'Vienna',
//   makePizza,
//   onOrderError,
// );

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     // for (const pizza of this.pizzas) {
//     if (!this.pizzas.includes(pizzaName)) {
//       return console.log(
//         onError(
//           `There is no pizza with a name ${pizzaName} in the assortment.`,
//         ),
//       );
//       // }
//     }
//     return console.log(onSuccess(pizzaName));
//   },
// };
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }
// function onOrderError(error) {
//   return `Error! ${error}`;
// }
// pizzaPalace.order(
//   'Smoked',
//   makePizza,
//   onOrderError,
// );
// pizzaPalace.order(
//   'Four meats',
//   makePizza,
//   onOrderError,
// );
// pizzaPalace.order(
//   'Big Mike',
//   makePizza,
//   onOrderError,
// );
// pizzaPalace.order(
//   'Vienna',
//   makePizza,
//   onOrderError,
// );

// Task 5/10
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   orderedItems.forEach(function (item, index) {
//     totalPrice += item;
//   });

//   // Change code above this line
//   return totalPrice;
// }
// Task 6/10
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach(function (number, ind) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// Task 7/10
// function getCommonElements(
//   firstArray,
//   secondArray,
// ) {
//   const commonElements = [];
//   // Change code below this line
//   firstArray.forEach(function (arr, ind) {
//     if (secondArray.includes(arr)) {
//       commonElements.push(arr);
//     }
//   });

//   return commonElements;
//   // Change code above this line
// }
// // Task 8/10

// const calculateTotalPrice = (
//   quantity,
//   pricePerItem,
// ) => {
//   return quantity * pricePerItem;
// };

// // Task 9
// const calculateTotalPrice = (
//   quantity,
//   pricePerItem,
// ) => quantity * pricePerItem;

// // Task 10

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// };

// // Task 11
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// };

// // Task 12
// const getCommonElements = (
//   firstArray,
//   secondArray,
// ) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   return commonElements;
// };

// Task 13
// function changeEven(numbers, value) {
//   const newArray = [];
//   numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       newArray.push(number + value);
//     } else {
//       newArray.push(number);
//     }
//   });
//   return newArray;
// }
// Task 14

// const planetsLengths = planets.map(
//   (planet) => planet.length,
// );

// Task 15
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     rating: 7.94,
//   },
//   {
//     title: 'Enemy of God',
//     author: 'Bernard Cornwell',
//     rating: 8.67,
//   },
// ];

// const titles = books.map((title) => title.title);

// Task 16
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism'],
//   },
// ];

// const genres = books.flatMap(
//   (book) => book.genres,
// );

// Task 17
// const getUserNames = (users) => {
//   return users.map((user) => user.name);
// };

// Task 18
// const getUserEmails = (users) => {
//   return users.map((user) => user.email);
// };

// Task 19
// const numbers = [
//   17, 24, 82, 61, 36, 18, 47, 52, 73,
// ];

// const evenNumbers = numbers.filter(
//   (number) => number % 2 === 0,
// );
// const oddNumbers = numbers.filter(
//   (number) => number % 2 !== 0,
// );
// Task 20
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction', 'mysticism'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism', 'adventure'],
//   },
// ];
// const allGenres = books.flatMap(
//   (book) => book.genres,
// );
// const uniqueGenres = allGenres.filter(
//   (genre, ind, arr) => arr.indexOf(genre) === ind,
// );

// Task 21
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     rating: 7.94,
//   },
//   {
//     title: 'Enemy of God',
//     author: 'Bernard Cornwell',
//     rating: 8.67,
//   },
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';

// const topRatedBooks = books.filter(
//   (rat) => rat.rating >= MIN_RATING,
// );
// const booksByAuthor = books.filter(
//   (book) => book.author === AUTHOR,
// );
// // Task 22
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(
//     (user) => user.eyeColor === color,
//   );
// };

// Task 23
// const getUsersWithAge = (
//   users,
//   minAge,
//   maxAge,
// ) => {
//   return users.filter(
//     (user) =>
//       user.age >= minAge && user.age <= maxAge,
//   );
// };

// Task 24
// const getUsersWithFriend = (
//   users,
//   friendName,
// ) => {
//   return users.filter((user) =>
//     user.friends.includes(friendName),
//   );
// };

// Task 25

// const getFriends = (users) => {
//   const allFriends = users.flatMap(
//     (user) => user.friends,
//   );

//   console.log(allFriends);
//   return allFriends.filter(
//     (user, ind, arr) =>
//       console.log(
//         'Это индексОф',
//         arr.indexOf(user),
//       ) === console.log('Это инд', ind),
//   );
// };
// console.log(getFriends(users));
// Task 26
// const getActiveUsers = (users) => {
//   return users.filter(
//     (user) => user.isActive === true,
//   );
// };

// Task 27
// const getInactiveUsers = (users) => {
//   return users.filter(
//     (user) => user.isActive !== true,
//   );
// };

// Task 28
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     rating: 7.94,
//   },
// ];
// const BOOK_TITLE =
//   'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';

// const bookWithTitle = books.find(
//   (book) => book.title === BOOK_TITLE,
// );
// const bookByAuthor = books.find(
//   (book) => book.author === AUTHOR,
// );

// Task 29
// const getUserWithEmail = (users, email) => {
//   return users.find(
//     (user) => user.email === email,
//   );
// };

// Task 30
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const eachElementInFirstIsEven = firstArray.every(
//   (arr) => arr % 2 === 0,
// );
// const eachElementInFirstIsOdd = firstArray.every(
//   (arr) => arr % 2 !== 0,
// );

// const eachElementInSecondIsEven =
//   secondArray.every((arr) => arr % 2 === 0);
// const eachElementInSecondIsOdd =
//   secondArray.every((arr) => arr % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(
//   (arr) => arr % 2 === 0,
// );
// const eachElementInThirdIsOdd = thirdArray.every(
//   (arr) => arr % 2 !== 0,
// );
// Task 31
// const isEveryUserActive = (users) => {
//   return users.every(
//     (user) => user.isActive === true,
//   );
// };

// Task 32
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(
//   (arr) => arr % 2 === 0,
// );
// const anyElementInFirstIsOdd = firstArray.some(
//   (arr) => arr % 2 !== 0,
// );

// const anyElementInSecondIsEven = secondArray.some(
//   (arr) => arr % 2 === 0,
// );
// const anyElementInSecondIsOdd = secondArray.some(
//   (arr) => arr % 2 !== 0,
// );

// const anyElementInThirdIsEven = thirdArray.some(
//   (arr) => arr % 2 === 0,
// );
// const anyElementInThirdIsOdd = thirdArray.some(
//   (arr) => arr % 2 !== 0,
// );

// Task 33
// const isAnyUserActive = (users) => {
//   return users.some((user) => user.isActive === true || false);
// };

// Task 34
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce(previos, (times) => previos + times);

// const averagePlayTime = totalPlayTime / playtimes.length;
// Task 35
// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return total + player.playtime / player.gamesPlayed;
// }, 0);

// Task 36

// const calculateTotalBalance = (users) => {
//   return users.reduce((prev, user) => {
//     return prev + user.balance;
//   }, 0);
// };

// Task 37
// const getTotalFriendCount = (users) => {
//   return users.reduce((total, user) => {
//     return (total += user.friends.length);
//   }, 0);
// };

// Task 38
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = ['Tanith Lee', 'Bernard Cornwell', 'Robert Sheckley', 'Fyodor Dostoevsky'];

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// Task 39
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
// Task 40
// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
//   'Howard Lovecraft',
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// Task 41
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

// Task 42
// const sortByAscendingBalance = (users) => {
//   return [...users].sort((bal, ebal) => bal.balance - ebal.balance);
// };

// Task 43
// const sortByDescendingFriendCount = (users) => {
//   return [...users].sort((a, b) => b.friends.length - a.friends.length);
// };
// Task 44
// const sortByName = (users) => {
//   return [...users].sort((a, b) => a.name.localeCompare(b.name));
// };

// Task 45

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .sort((a, b) => a.localeCompare(b));

// Task 46
// const getNamesSortedByFriendCount = (users) => {
//   return [...users].sort((a, b) => a.friends.length - b.friends.length).map((user) => user.name);
// };
// Task 47
// const getSortedFriends = (users) => {
//   return [...users]
//     .flatMap((friend) => friend.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index)
//     .sort((a, b) => a.localeCompare(b));
// };

// Task 48

// const getTotalBalanceByGender = (users, gender) => {
//   return [...users]
//     .filter((value) => value.gender === gender)
//     .reduce((prev, user) => {
//       return prev + user.balance;
//     }, 0);
// };

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: 'Манго',
// };
// const poly = {
//   username: 'Поли',
// };

// greetGuest.call(mango, 'Добро пожаловать'); // Добро пожаловать, Манго.
// greetGuest.call(poly, 'С приездом'); // С приездом, Поли.
