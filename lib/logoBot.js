// Node modules
const inquirer = require("inquirer");
const fs = require("fs");

const questions = require("./questions");
const { Square, Circle, Triangle } = require("./shapes");

function runLogoBot() {
  // Asks the user the questions of the questions.js file
  inquirer.prompt(questions).then((answers) => {
    // Stores the generated logo's SVG file data
    let generatedLogo = "";

    // Checks with shape type was chosen by the user
    switch (answers.shapeType) {
      case "Square":
        // Stores the SVG file data
        generatedLogo = renderSquare(
          answers.text,
          answers.textColor,
          answers.color
        );
        break;
      case "Circle":
        // Stores the SVG file data
        generatedLogo = renderCircle(
          answers.text,
          answers.textColor,
          answers.color
        );
        break;
      case "Triangle":
        // Stores the SVG file data
        generatedLogo = renderTriangle(
          answers.text,
          answers.textColor,
          answers.color
        );
        break;
    }

    // Writes the SVG file data in a file
    fs.writeFile("generatedLogo.html", generatedLogo, (error) => {
      if (error) {
        console.log(error);
      }
    });
  });
}

function renderSquare(text, textColor, color) {
  // New square object is created
  const square = new Square();

  // Square's attributes are set
  square.setText(text);
  square.setTextColor(textColor);
  square.setColor(color);

  // Square's SVG is created and returned
  return square.render();
}

function renderCircle(text, textColor, color) {
  // New circle object is created
  const circle = new Circle();

  // Circle's attributes are set
  circle.setText(text);
  circle.setTextColor(textColor);
  circle.setColor(color);

  // Circle's SVG is created and returned
  return circle.render();
}

function renderTriangle(text, textColor, color) {
  // New triangle object is created
  const triangle = new Triangle();

  // Triangle's attributes are set
  triangle.setText(text);
  triangle.setTextColor(textColor);
  triangle.setColor(color);

  // Triangle's SVG is created and returned
  return triangle.render();
}

module.exports = runLogoBot;
