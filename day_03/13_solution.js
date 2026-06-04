// 13. Number Guessing Hint

const min = 10;
const max = 50;
const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
const numberGuessingGame = function (num) {
  if (!num) return "Enter a number ? ";
  if (num == randomNumber) {
    return `Matched ${randomNumber}`;
  } else if (num > randomNumber) {
    return `Too High`;
  } else {
    return `Too Low`;
  }
};

console.log(numberGuessingGame(32));
