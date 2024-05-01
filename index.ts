#!/usr/bin/env node
//shabang

import inquirer from "inquirer";

//1 computer will generate a random number
//2 user input for guessing number
//3 compare the both

const randomnumber = Math.floor(Math.random() * 10 +1);

console.log("WELCOME TO NUMBER GUESSING GAME")
const answer = await inquirer.prompt([
  { name: "userguessednumber", type: "number", message: "PLZ GUESS A NUMBER BETWEEN 1-10" },
]);
if (answer.userguessednumber === randomnumber) {
  console.log("CONGRATS YOU GUES A RIGHT NUMBER ");
} else {
  console.log("YOU GUESS THE WRONG NUMBER");
}
