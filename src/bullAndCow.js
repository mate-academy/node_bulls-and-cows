
export function bullAndCows(randomNumber, userNumber) {
  let bull = 0;
  let cow = 0;

  for (let i = 0; i < randomNumber.length; i++) {
    if (randomNumber[i] === userNumber[i]) {
      bull++;
    } else if (randomNumber.includes(userNumber[i])) {
      cow++;
    }
  }

  if (bull !== 4) {
    console.log(`bulls: ${bull}, cows: ${cow}`);

    return true;
  } else {
    console.log('You won!!');

    return false;
  }
};
