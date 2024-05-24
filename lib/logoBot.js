// Node modules
const inquirer = require("inquirer");
const fs = require("fs");

const questions = require("./questions");

function runLogoBot() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
  });
}

module.exports = runLogoBot;
