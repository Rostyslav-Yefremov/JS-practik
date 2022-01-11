<!-- const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(total); // 32


# Вначале метод reduce() создаёт внутреннюю переменную-аккумулятор и

# присваивает ей значение параметра initialValue или первого элемента

# перебираемого массива, если initialValue не задан.

previousValue = 0

# Далее коллбек-функция вызывается для каждого элемента массива. Текущее значение

# параметра previousValue это то, что вернула коллбек-функция на прошлой итерации.

Итерация 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2 Итерация 2 ->
previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9 Итерация 3 -> previousValue = 9 ->
number = 3 -> return 9 + 3 -> return 12 Итерация 4 -> previousValue = 12 -> number = 14 -> return
12 + 14 -> return 26 Итерация 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32

# После того как весь массив перебран, метод reduce() возвращает значение аккумулятора.

Результат - 32 -->
