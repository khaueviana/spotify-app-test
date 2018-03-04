// before ES6
// module.exports = {
//   sum: (num1, num2) => num1 + num2,
//   sub: (num1, num2) => num1 - num2,
//   mult: (num1, num2) => num1 * num2,
//   div: (num1, num2) => ((num2 === 0) ? 'Its not possible a division by zero' : num1 / num2),
// };

const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = (num1, num2) => ((num2 === 0) ? 'Its not possible a division by zero' : num1 / num2);

export { sum, sub, mult, div };
