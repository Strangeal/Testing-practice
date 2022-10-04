const {stringLength, reverseString, calculator, capitalize} = require('./index');

const math = new calculator();

// check string length
test('Check string length to be between 1 and 10', () => {
    expect(stringLength('Hello')).toBe(5);
})

// check if string length is empty or not
test('string length to be `` empty', () => {
    expect(stringLength('')).toThrow(Error);
})

// check if string length is less than 10 or not
test('string length to be less than 10', () => {
    expect(stringLength('Justice Bajeri')).toThrow(Error);
})



// Test reverse string
test('Check if string is reversed', () => {
    expect(reverseString('Yello')).toMatch('olleY');
  })

  // test case 'Calculator'
describe('My calculator', () => {
    test('adds 2 + 4 to equal 6', () => {
        expect(math.add(2,4)).toBe(6);
    })

    test('adds 2 + 4 not be equal 10', () => {
        expect(math.add(2,4)).not.toBe(10);
    })

    // substract
    test('subtract 13 - 5 to eual 8', () => {
        expect(math.subtract(13, 5)).toBe(8);
    })

    test('subtract 13 - 5 not to equal 11', () => {
        expect(math.subtract(13, 5)).not.toBe(11);
    })

    // divide
    test('divide 22 / 2 to equal 11', () => {
        expect(math.divide(22, 2)).toBe(11);
    })

    test('divide 22 / 2 not to equal 15', () => {
        expect(math.divide(22, 2)).not.toBe(15);
    })

    // multiply
    test('divide 9 * 5 to equal 45', () => {
        expect(math.multiply(9, 5)).toBe(45);
    })

    test('divide 22 * 2 not to equal 33', () => {
        expect(math.multiply(9, 5)).not.toBe(33);
    })

});

// check if first character of string in caps
// should take 'apple' and return 'Apple'
test('capitazile first character of string', () => {
    expect(capitalize('magic')).toMatch('Magic');
});
    
