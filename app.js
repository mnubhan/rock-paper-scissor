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
rock_div.addEventListener("click", function () {
  console.log("hey you clicked on rock");
});
paper_div.addEventListener("click", function () {
  console.log("hey you clicked on paper");
});
scissor_div.addEventListener("click", function () {
  console.log("hey you clicked on rock");
});
