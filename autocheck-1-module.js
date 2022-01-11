// Task 1/36

// // Change code below this line
// const productName = 'Droid';
// // console.log(productName);
// // 'Droid'
// const pricePerItem = 2000;
// // console.log(pricePerItem);
// // 2000

// // Task 2/36
// let productName = 'Droid';
// let pricePerItem = 2000;

// productName = 'Repair droid';
// pricePerItem = 2000 + 1500;
// // Change code below this line

// // Task 3/36

// let topSpeed = 160;
// let distance = 617.54;
// let login = 'mango935';
// let isOnline = true;
// let isAdmin = false;
// // Task 4/36
// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;

// // Task 5/36
// const productName = 'Droid';
// const pricePerItem = 3500;

// // Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

// // Task 6/36

// const orderedQuantity = 6;
// const pricePerDroid = 800;
// const deliveryFee = 50;
// const totalPrice =
//   pricePerDroid * orderedQuantity + deliveryFee;

// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// // Task 7/36

// function sayHi() {
//   console.log(
//     'Hello, this is my first function!',
//   );
// }
// sayHi();
// // Task 8/36
// function add(a, b, c) {
//   console.log(
//     `Addition result equals ${a + b + c}`,
//   );
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);
// // Task 9/36
// function add(a, b, c) {
//   return a + b + c;
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));
// // Task 10/36
// function makeMessage(name, price) {
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   return message;
// }
// // Task 11/36
// function calculateTotalPrice(
//   orderedQuantity,
//   pricePerItem,
// ) {
//   const totalPrice =
//     orderedQuantity * pricePerItem;
//   return totalPrice;
// }

// // Task 12/36
// function makeOrderMessage(
//   orderedQuantity,
//   pricePerDroid,
//   deliveryFee,
// ) {
//   const totalPrice =
//     orderedQuantity * pricePerDroid + deliveryFee;
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//   return message;
// }
// // Task 13/36
// function isAdult(age) {
//   const passed = age >= 18;
//   return passed;
// }
// // Task 14/36
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   const isMatch = password === SAVED_PASSWORD;
//   return isMatch;
// }
// // Task 15/36
// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }

// // Task 16/36
// function checkStorage(available, ordered) {
//   let message;
//   if (ordered > available) {
//     message = 'Not enough goods in stock!';
//   } else {
//     message =
//       'Order is processed, our manager will contact you.';
//   }
//   return message;
// }

// // Task 17/36
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// // Task 18/36
// function makeTransaction(
//   pricePerDroid,
//   orderedQuantity,
//   customerCredits,
// ) {
//   let message;
//   let totalPrice =
//     pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = 'Insufficient funds!';
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${
//       customerCredits - totalPrice
//     } credits left`;
//   }
//   return message;
// }

// // Task 19/36
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) {
//     // Change this line
//     message = 'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }

// // Task 20/36
// function checkStorage(available, ordered) {
//   let message;
//   if (ordered === 0) {
//     message =
//       'There are no products in the order!';
//   } else if (ordered > available) {
//     message =
//       'Your order is too large, there are not enough items in stock!';
//   } else {
//     message =
//       'The order is accepted, our manager will contact you';
//   }
//   return message;
// }

// // Task 21/36
// function isNumberInRange(start, end, number) {
//   const isInRange =
//     number >= start && number <= end;
//   return isInRange;
// }
// Task 22/36

// function checkIfCanAccessContent(subType) {
//   const canAccessContent =
//     subType === 'pro' || subType === 'vip';

//   return canAccessContent;
// }
// // Task 23/36
// function isNumberNotInRange(start, end, number) {
//   const isInRange =
//     number >= start && number <= end;
//   const isNotInRange = !isInRange;
//   return isNotInRange;
// }
// // Task 24/36
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (
//     totalSpent >= 20000 &&
//     totalSpent <= 50000
//   ) {
//     discount = SILVER_DISCOUNT;
//   } else if (
//     totalSpent >= 5000 &&
//     totalSpent <= 20000
//   ) {
//     discount = BRONZE_DISCOUNT;
//   } else if (totalSpent < 5000) {
//     discount = BASE_DISCOUNT;
//   }
//   return discount;
// }

// // Task 25/36
// function checkStorage(available, ordered) {
//   let message;

//   message =
//     ordered > available
//       ? 'Not enough goods in stock!'
//       : 'The order is accepted, our manager will contact you';

//   return message;
// }

// // Task 26/36
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   // Change code below this line
//   message =
//     password === ADMIN_PASSWORD
//       ? 'Access is allowed'
//       : 'Access denied, wrong password!';
//   // Change code above this line
//   return message;
// }

// // Task 27/36

// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//   switch (
//     type // Change this line
//   ) {
//     case 'starter': // Change this line
//       price = 0; // Change this line
//       break;

//     case 'professional': // Change this line
//       price = 20; // Change this line
//       break;

//     case 'organization': // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }
// // Task 28/36
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   switch (password) {
//     case null:
//       message = 'Canceled by user!';
//       break;

//     case ADMIN_PASSWORD:
//       message = 'Welcome!';
//       break;

//     default:
//       message = 'Access denied, wrong password!';
//   }

//   return message;
// }

// // Task 29/36
// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   switch (country) {
//     case 'China':
//       price = 100;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case 'Chile':
//       price = 250;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case 'Australia':
//       price = 170;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case 'Jamaica':
//       price = 120;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     default:
//       message =
//         'Sorry, there is no delivery to your country';
//   }
//   // Change code above this line
//   return message;
// }

// // Task 30/36
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }

// // Task 31/36
// const courseTopic = 'JavaScript essentials';
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement =
//   courseTopic[courseTopic.length - 1];

// Task 32/36
// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }
// Task 33/36
function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
  if (message.length <= maxLength) {
    return message;
  } else if (message.length > maxLength) {
    result = message.slice(0, maxLength) + '...';
  }
  /// Change code above this line
  return result;
}

// Task 34/36

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase();

  return normalizedInput;
}

// Task 35/36
function checkForName(fullName, name) {
  const result = fullName.includes(name); // Change this line
  return result;
}

// Task 36/36
function checkForSpam(message) {
  let result;
  const normal = message.toLowerCase();
  // Change code below this line
  if (
    normal.includes('spam') ||
    normal.includes('sale')
  ) {
    result = true;
  } else {
    result = false;
  }

  return result;
}
