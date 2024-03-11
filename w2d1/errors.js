// ERRORS !

const result = 2 + 2;

// result = 5;
// (╯°□°）╯︵ ┻━┻

console.log("The value from 2 + 2 above", result);

const addTwoNumbers = (a, b) => {
  // NaN is a number
  if (typeof a !== "number" || typeof b !== "number") {
    // return console.log("HEY PUT NUMBERS IN THERE!"); // Mad but not that much
    throw new Error("HEY PUT NUMBERS IN THERE!");
  }
  return a + b;
};

try {
  const result2 = addTwoNumbers(4, "five");
  // (╯°□°）╯︵ ┻━┻

  console.log(result2);
} catch (error) {
  console.log("OH NO.", error);
}

console.log("That was a great explanation of error throwing...");

const obj1 = { a: 1 };
const obj2 = { a: 1 };

// obj1 === obj2
