function predict(guess, array) {
  let matchArray = [];

  array.forEach((word) => {
    guess.forEach((letter, index) => {
      if (word[index] == letter.letter && letter.state == "m") {
        matchArray.push(word);
      }
    });
  });

  if (matchArray.length == 0) {
    matchArray = array;
  }

  let includeArray = [];

  matchArray.forEach((word) => {
    guess.forEach((letter, index) => {
      if (word.includes(letter.letter) && letter.state == "i") {
        if (word[index] != letter.letter) {
          includeArray.push(word);
        }
      }
    });
  });

  if (includeArray.length == 0) {
    includeArray = matchArray;
  }

  let cleanArray = includeArray;

  for (let i = 0; i < 50; i++) {
    includeArray.forEach((word) => {
      guess.forEach((letter) => {
        if (word.includes(letter.letter) && letter.state == "x") {
          cleanArray.splice(cleanArray.indexOf(word), 1);
        }
      });
    });
  }

  //   console.log(cleanArray);

  let countArray = [];
  let wordArray = [];
  cleanArray.forEach((word, index) => {
    if (wordArray.includes(word)) {
      countArray[wordArray.indexOf(word)]++;
    } else {
      wordArray.push(word);
      countArray.push(1);
    }
  });

  //   console.log(countArray);

  let max = Math.max.apply(Math, countArray);

  let scrubbedArray = [];

  wordArray.forEach((word, index) => {
    if (countArray[index] == max) {
      scrubbedArray.push(word);
    }
  });

  return scrubbedArray;
}

export default predict;
