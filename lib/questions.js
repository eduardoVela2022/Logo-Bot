// Validation
const { stringHasALengthOfThree, stringIsNotEmpty } = require("./validation");

// The list of questions inquirer will ask the user
const questions = [
  {
    // Shape type
    type: "list",
    name: "shapeType",
    message: "Choose the logo's shape:",
    choices: ["Square", "Circle", "Triangle"],
  },
  {
    // Shape text
    type: "input",
    name: "text",
    message: "Enter the logo's text: (It can only contain 3 letters maximum)",
    validate: stringHasALengthOfThree,
  },
  {
    // Shape text color
    type: "input",
    name: "textColor",
    message: "Enter the color of the logo's text",
    validate: stringIsNotEmpty,
  },
  {
    // Shape color
    type: "input",
    name: "color",
    message: "Enter the color of the logo's shape",
    validate: stringIsNotEmpty,
  },
];

// Exports
module.exports = questions;
