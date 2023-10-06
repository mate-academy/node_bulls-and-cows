'use strict';

const readline = require('readline');

function getRnd() {
  return Math.floor(Math.random() * 9);
}

const randomNumber = `${getRnd()}${getRnd()}${getRnd()}${getRnd()}`;
let win = false;

function bullsAndCows(userNum) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < userNum.length; i++) {
    if (randomNumber.indexOf(userNum[i]) === i) {
      bulls++;
    } else if (randomNumber.indexOf(userNum[i]) > -1) {
      cows++;
    }
  }

  if (bulls === 4) {
    win = true;
  }

  return `bulls: ${bulls}, cows: ${cows}`;
}

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function game() {
  terminal.question('To exit type \'exit\' \nWhat is your number? ',
    (userNumber) => {
      if (userNumber.localeCompare('exit') === 0) {
        terminal.close();

        return;
      }

      // eslint-disable-next-line no-console
      console.log(`${bullsAndCows(userNumber)}\n`);

      if (win) {
        terminal.close();

        return;
      }

      game();
    }
  );
}

game();

// while (!win) {
//   terminal.question('To exit type \'exit\' \nWhat is your number? ',
//     (userNumber) => {
//       if (userNumber.concat('exit') === 0) {
//         terminal.close();
//       }
//       console.log(`${bullsAndCows(userNumber)}`);

//       if (win) {
//         terminal.close();
//       }
//     }
//   );
// }
