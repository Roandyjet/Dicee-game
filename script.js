var randomNumber1 = Math.floor(Math.random() * 6) + 1;

function firstDice() {
  return document
    .querySelector(".img1")
    .setAttribute("src", "images/dice" + randomNumber1 + ".png");
}

firstDice();

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

function secondDice() {
  return document
    .querySelector(".img2")
    .setAttribute("src", "images/dice" + randomNumber2 + ".png");
}

secondDice();

function winner() {
  if (randomNumber1 > randomNumber2) {
    return (document.querySelector("h1").innerHTML = "Player 1 wins");
  } else if (randomNumber1 < randomNumber2) {
    return (document.querySelector("h1").innerHTML = "Player 2 wins");
  } else {
    return (document.querySelector("h1").innerHTML = "Draw!");
  }
}

winner();
