
 export  const calculating = (secret, guess) => {
  let bulls = 0;
  let cows = 0;
  let numbers = new Array(10);

  for (let i=0; i<10; i++){
    numbers[i] = 0;
  }

  for (let i = 0; i<secret.length; i++) {
    let s = secret.charCodeAt(i) - 48;
    let g = guess.charCodeAt(i) - 48;
    if (s == g) bulls++;
    else {
      if (numbers[s] < 0) cows++;
      if (numbers[g] > 0) cows++;
      numbers[s] ++;
      numbers[g] --;
    }
  };


  if (bulls === 4) {
    console.log('You are win!!!');
    return  true;
  } else {
    console.log(`Bulls: ${bulls}, Cows: ${cows}`);
    return false;
  }
};

