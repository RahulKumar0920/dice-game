var randomNumber1 = Math.round(Math.random() * 5) + 1;
var randomDiceImg1 = "dice" + randomNumber1 + ".png";
var randomImgSource1 = "images/" + randomDiceImg1;
// console.log(randomImgSource1);

document.querySelectorAll("img")[0].setAttribute("src", randomImgSource1);

var randomNumber2 = Math.round(Math.random() * 5) + 1;
var randomDiceImg2 = "dice" + randomNumber2 + ".png";
var randomImgSource2 = "images/" + randomDiceImg2;
// console.log(randomImgSource2);

document.querySelectorAll("img")[1].setAttribute("src", randomImgSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "⛳️ Player 1";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 ⛳️";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
