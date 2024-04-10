#! /urs/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1)
;
const gassNumber = await inquirer.prompt([

  {
    message: "Enter Your Number",
    type: "number",
    name: "GassNumber",
  },
]);

if (gassNumber.GassNumber === randomNumber) {
  console.log("congratulation you win");
} else {
  console.log("you lose");
}
