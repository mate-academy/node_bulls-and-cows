/* eslint-disable no-console */
import readline from 'readline';

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getNumbersForGame() {
  let i = '';

  while (i.length < 4) {
    const newNumber = Math.floor(Math.random() * 10);

    if (!i.includes(newNumber)) {
      i += newNumber;
    }
  }

  return i.split('');
}

const randomNumberFind = getNumbersForGame();

console.log(randomNumberFind);

function calculation(arrayNumbers) {
  let cows = 0;
  let bulls = 0;

  const alreadySearched = [];

  let iterator = 0;

  while (iterator < 4) {
    if (arrayNumbers[iterator] === randomNumberFind[iterator]) {
      if (alreadySearched.includes(arrayNumbers[iterator])) {
        cows--;
      }

      alreadySearched.push(arrayNumbers[iterator]);
      bulls++;
    } else {
      if (randomNumberFind.includes(arrayNumbers[iterator])
      && !alreadySearched.includes(arrayNumbers[iterator])) {
        alreadySearched.push(arrayNumbers[iterator]);

        cows++;
      }
    }

    iterator++;
  }

  return {
    cows, bulls,
  };
}

function BullsAndCows() {
  terminal.question('Enter numbers: ', (numbers) => {
    if (
      numbers.split('').some((item) => isNaN(+item))
      || numbers.length !== 4
    ) {
      console.log('Enter valid numbers');
      BullsAndCows();
    } else {
      const arrayNumbers = numbers.split('');

      const { bulls, cows } = calculation(arrayNumbers);

      if (bulls === 4) {
        console.log('you win!!!');
        terminal.close();
      } else {
        console.log(`cows - ${cows}, bulls - ${bulls}`);
        BullsAndCows();
      }
    }
  });
}

BullsAndCows();
