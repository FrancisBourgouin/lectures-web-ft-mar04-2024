const calculateCart = require("./calculate-cart");

console.log("Super cart calculator 2000!");

const cart = "HAHAHA LOL";
const TAX_AMOUNT = 0.14978;

const result = calculateCart(cart, TAX_AMOUNT);

console.log(`The result of this cart will be:`, result);
