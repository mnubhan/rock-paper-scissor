/* multiline comment shift+option+a */
/*
 *call all the html element that will be used and store it variable
 *this is catch the dom element
 *so that we doesn't have to call it again and again
 */
const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoredBoard_div = document.getElementsByClassName("score-board");
const result_div = document.getElementsByClassName("result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice(){
  const choices = ['rock', 'paper', 'scissor']
  /* 
  *Math.random() will return a random number between 0 and 1
  */
  randomNumber=Math.floor(Math.random()*3);
  return choices[randomNumber]
}
console.log(getComputerChoice());
/* 
*reuse function will be called when the user click on the rock, paper, or scissor
*/

function game(userChoice) {
  console.log("user choice => " + userChoice);
}
/*
 *catch what happen in the web browser through event listener
 *event listener is a function that will be called when something happen
 *to add event listener we need to add the element that will be listened with addEventListener method
 *addEventListener it will attach an event handler to the specified element
 *addEventListener has 2 parameter
 *1st parameter is the event type
 *2nd parameter is the function that will be executed when the event occurs
 *event handler is a function that will be called when the specified event is delivered to the target
 */

function main() {
  rock_div.addEventListener("click", function () {
    game("rock");
    // console.log("hey you clicked on rock");
  });
  paper_div.addEventListener("click", function () {
    game("paper")
    // console.log("hey you clicked on paper");
  });
  scissor_div.addEventListener("click", function () {
    game("scissor")
    // console.log("hey you clicked on scissor");
  });
}

/* 
*function need to be called so that it will be executed
*/

main();