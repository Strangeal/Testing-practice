// Check string length and return strings between 1 and 10
const stringLength = (string) => {
  let rLength = string.length;
  if(rLength > 0 && rLength <= 10) {
    return rLength;
  } else {
    throw new Error('Your string should be at least 1 character long and not longer than 10 characters')
  }
}

// reverse strings
const reverseString = (string) => {
  return string.split('').reverse().join('');
}

// calculator
class calculator {
  add = (addA, addB) => addA + addB;
  subtract = (subA, subB) => subA - subB;
  divide = (divA, divB) => divA / divB;
  multiply = (mulA, mulB) => mulA * mulB;
}


// capitalize first character of a string
const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

module.exports = {stringLength, reverseString, calculator, capitalize};