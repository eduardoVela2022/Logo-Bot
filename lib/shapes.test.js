describe("Shapes", () => {
  // Shapes test #1
  it("When a square is rendered, it should return a SVG file of a square with the given color, text and text color.", () => {
    // New square shape is created
    const shape = new Square();

    // Square's text
    shape.setText("ABC");
    // Square's text color
    shape.setTextColor("black");
    // Square's color
    shape.setColor("red");

    // The expected result of the square's render function
    const expectedResult = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 100 100">
        <rect width="100" height="100" rx="5" ry="5" fill="red" />


        <text
        x="50%"
        y="50%"
        dominant-baseline="middle"
        text-anchor="middle"
        font-size="40"
        fill="black"
        >
        ABC
        </text>
    </svg>`;

    // The result should be equal to the expected result
    expect(shape.render()).toEqual(expectedResult);
  });

  // Shapes test #2
  it("When a circle is rendered, it should return a SVG file of a square with the given color, text and text color.", () => {
    // New circle shape is created
    const shape = new Circle();

    // The expected result of the circle's render function
    const expectedResult = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <circle r="100" cx="150" cy="100" fill="blue" />
  
      <text
        x="50%"
        y="50%"
        dominant-baseline="middle"
        text-anchor="middle"
        font-size="72"
        fill="white"
      >
        KIM
      </text>
    </svg>
    `;

    // Circle's text
    shape.setText("KIM");
    // Circle's text color
    shape.setTextColor("white");
    // Circle's color
    shape.setColor("blue");

    // The result should be equal to the expected result
    expect(shape.render()).toEqual(expectedResult);
  });

  // Shapes test #3
  it("When a triangle is rendered, it should return a SVG file of a square with the given color, text and text color.", () => {
    // New triangle shape is created
    const shape = new Triangle();

    // Triangle's text
    shape.setText("TRI");
    // Triangle's text color
    shape.setTextColor("white");
    // Triangle's color
    shape.setColor("green");

    // The expected result of the triangle's render function
    const expectedResult = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <polygon points="150,0 250,200 50,200" style="fill: green" />

      <text
        x="50%"
        y="75%"
        dominant-baseline="middle"
        text-anchor="middle"
        font-size="56"
        fill="white"
      >
        TRI
      </text>
    </svg>
    `;

    // The result should be equal to the expected result
    expect(shape.render()).toEqual(expectedResult);
  });
});
