/* eslint-disable no-console */
/* eslint-disable max-len */
'use strict';

// Импортируем необходимые модули
const readline = require('readline'); // Для работы с вводом/выводом в консоли

const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput'); // Валидатор ввода

const { generateRandomNumber } = require('./modules/generateRandomNumber'); // Генератор числа

const { getBullsAndCows } = require('./modules/getBullsAndCows'); // Логика "быков и коров"

// Создаём интерфейс для ввода/вывода в консоли
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Генерируем случайное число в начале игры
const secretNumber = generateRandomNumber();

console.log('Добро пожаловать в игру "Быки и Коровы"! 🎯');
console.log('Я загадал 4-значное число. Попробуй угадать!');

// Основная функция игры — спрашиваем пользователя и обрабатываем ввод
function askUser() {
  rl.question('Введи 4-значное число: ', (answer) => {
    // Убираем лишние пробелы
    const input = answer.trim();

    // Проверяем корректность ввода: 4 уникальные цифры, первая не 0
    if (!checkIsValidUserInput(input)) {
      console.log(
        '❌ Неверный ввод! Введи 4 уникальные цифры, первая не может быть 0.',
      );
      // Если ввод некорректный, спрашиваем снова

      return askUser();
    }

    // Вычисляем количество быков и коров
    // Используем строки, чтобы избежать проблем с ведущими нулями
    const { bulls, cows } = getBullsAndCows(input, secretNumber);

    // Показываем пользователю результат
    console.log(`Быки: ${bulls}, Коровы: ${cows}`);

    // Если пользователь угадал все цифры, завершаем игру
    if (bulls === 4) {
      console.log(`🎉 Поздравляю! Ты угадал число ${secretNumber}!`);
      rl.close();
    } else {
      // Иначе спрашиваем снова
      askUser();
    }
  });
}

// Запускаем первый вопрос
askUser();
