// This class holds all the attributes and methods that all other classes have in common
class Shape {
  // Empty constructor initializes shape's attributes
  constructor() {
    this.text = null;
    this.textColor = null;
    this.color = null;
  }

  // Sets the text of the shape
  setText(newText) {
    this.text = newText;
  }

  // Sets the text color of the shape
  setTextColor(newTextColor) {
    this.textColor = newTextColor;
  }

  // Sets the color of the shape
  setColor(newColor) {
    this.color = newColor;
  }
}

class Square extends Shape {
  // Returns a SVG element using the square's attributes
  render() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 100 100">
        <rect width="100" height="100" rx="5" ry="5" fill="${this.color}" />


        <text
        x="50%"
        y="50%"
        dominant-baseline="middle"
        text-anchor="middle"
        font-size="40"
        fill="${this.textColor}"
        >
        ${this.text}
        </text>
    </svg>`;
  }
}

class Circle extends Shape {
  // Returns a SVG element using the circle's attributes
  render() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <circle r="100" cx="150" cy="100" fill="${this.color}" />

      <text
        x="50%"
        y="50%"
        dominant-baseline="middle"
        text-anchor="middle"
        font-size="72"
        fill="${this.textColor}"
      >
        ${this.text}
      </text>
    </svg>
    `;
  }
}

class Triangle extends Shape {
  // Returns a SVG element using the triangle's attributes
  render() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <polygon points="150,0 250,200 50,200" style="fill: ${this.color}" />

      <text
        x="50%"
        y="75%"
        dominant-baseline="middle"
        text-anchor="middle"
        font-size="56"
        fill="${this.textColor}"
      >
        ${this.text}
      </text>
    </svg>
    `;
  }
}

// Exports shape classes
module.exports = { Square, Circle, Triangle };
