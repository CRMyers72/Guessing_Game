function generateWinningNumber() {
  let winningNumber = document.querySelector("winningNumber");
  winningNumber = Math.floor(Math.random() * 100);
}
function guessButton() {
  let guessedNumber = document.getElementById("guessedNumber").nodeValue;
  let response = document.querySelector("response");

  if (winningNumber < guessedNumber) {
    response.innerHTML = "You're guess is too high!";
  } else if (winningNumber > guessedNumber) {
    response.innerHTML = "You're guess is too low!";
  } else {
    response.innerHTML = "Congrats! You Win!";
  }
}

window.onload = function () {
  generateWinningNumber();
};
