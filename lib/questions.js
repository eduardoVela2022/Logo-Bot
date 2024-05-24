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
  },
  {
    // Shape text color
    type: "input",
    name: "textColor",
    message: "Enter the color of the logo's text",
  },
  {
    // Shape color
    type: "input",
    name: "color",
    message: "Enter the color of the logo's shape",
  },
];

module.exports = questions;
