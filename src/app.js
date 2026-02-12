import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //create 4 arrays that are part of a sentence

  //Who to blame? //what they did? //what do you want to avoid? //when?

  let who = ["the dog ", "Grandma ", "My neighbour "];
  let action = ["ate ", "broke ", "punch "];
  let what = ["my phone ", "my car ", "the project "];
  let when = ["this morning", "last night", "when I was cooking"];

  //create a variable that holds a random number between 0-1

  let randomWho = Math.floor(Math.random() * 3);
  let selectWho = who[randomWho];

  let randomAction = Math.floor(Math.random() * 3);
  let selectAction = action[randomAction];

  let randomWhat = Math.floor(Math.random() * 3);
  let selectWhat = what[randomWhat];

  let randomWhen = Math.floor(Math.random() * 3);
  let selectWhen = when[randomWhen];

  console.log(selectWho + selectAction + selectWhat + selectWhen)

};
