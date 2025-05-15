/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { generateRandomNumber } = require('./modules/generateRandomNumber');

const rl = readline.createInterface({ input, output });

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function askNumber(number) {
  return rl.question(number);
}

const randomNumber = generateRandomNumber();

async function main() {
  console.log('Вітаю! Давай зіграємо в гру? 🤡');
  await delay(1000);

  console.log('\nВгадай число яке я загадав і отримаєш подарунок 😈\n');
  await delay(1000);

  while (true) {
    const answer = await askNumber('Введи номер тут: ');

    if (!checkIsValidUserInput(answer)) {
      // eslint-disable-next-line max-len
      console.log(
        '\nНу ти приколіст, думав я не помічу? Давай пиши валідне число.\n',
      );
      await delay(1000);

      continue;
    }

    const { bulls, cows } = getBullsAndCows(answer, randomNumber);

    if (Number(answer) === randomNumber) {
      await delay(1000);
      console.log('\nВсе вірно! Ти вангуєш як бог, тримай тортик 🍰\n');
      break;
    } else {
      await delay(1000);
      console.log('\n🧠 Обробляю дані...');

      await delay(2000);
      console.log(`\nДодаю інтриги\n`);

      await delay(2000);
      // eslint-disable-next-line padding-line-between-statements
      console.log(
        `А от і не вгадав! Але ти вже близько - bulls: ${bulls}, cows: ${cows}.\n`,
      );
    }
  }
  await delay(2000);
  console.log(`Пам’ятай: ти керуєш своїм життям. Не зупиняйся! 🚀\n`);

  rl.close();
}

main();
