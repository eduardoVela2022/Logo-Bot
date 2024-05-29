// Checks if the string is not empty
function stringIsNotEmpty(value) {
  // If string is empty, return an error message
  if (value === "") {
    return "Please enter a valid value.";
  }

  // If not, returns true
  return true;
}

// Checks if the string has a length of 3 characters
function stringIsThreeCharactersLong(value) {
  // If string doesn't have a length of 3, return an error message
  if (value.length > 3 || value.length < 3) {
    return "Please enter a value 3 letters long.";
  }

  // If it has, return true
  return true;
}

// Exports
module.exports = {
  stringIsNotEmpty,
  stringHasALengthOfThree: stringIsThreeCharactersLong,
};
