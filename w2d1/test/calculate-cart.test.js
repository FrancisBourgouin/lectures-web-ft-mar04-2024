const chai = require("chai");
const expect = chai.expect;

const calculateCart = require("../calculate-cart");

describe("calculateCart - What Could Go Wrong", () => {
  it("should throw an error if the cart argument is missing", () => {
    const throwyFunction = () => calculateCart();
    const expectedErrorMessage = "PLEASE PROVIDE A CART YOU DUM DUM";

    expect(throwyFunction).to.throw(expectedErrorMessage);
  });
  it("should throw an error if the tax amount is missing", () => {
    const cart = [
      { name: "🐔", price: 9.99, weight: 1, isExpired: false },
      { name: "🥔", price: 0.99, weight: 1, isExpired: false },
    ];
    const throwyFunction = () => calculateCart(cart);
    const expectedErrorMessage = "PLEASE PROVIDE A TAX AMOUNT YOU DUM DUM";

    expect(throwyFunction).to.throw(expectedErrorMessage);
  });
  it("should throw an error if the data type is wrong for the parameters (cart/tax)", () => {
    const cart = {
      1: { name: "🐔", price: 9.99, weight: 1, isExpired: false },
      2: { name: "🥔", price: 0.99, weight: 1, isExpired: false },
    };
    const TAX_AMOUNT = "big";
    const throwyFunction = () => calculateCart(cart, TAX_AMOUNT);

    expect(throwyFunction).to.throw();
  });
  it("should warn the user and skip the item if the price is invalid", () => {
    const cart = [
      { name: "🐔", price: 9.99, weight: 1, isExpired: false },
      { name: "🥔", price: "one", weight: 1, isExpired: false },
    ];
    const TAX_AMOUNT = 0.1;

    const expectedAmountOfItems = 1;
    const expectedSubTotal = 9.99;

    const result = calculateCart(cart, TAX_AMOUNT);

    expect(result.subtotal).to.equal(expectedSubTotal);
    expect(result.amountOfItems).to.equal(expectedAmountOfItems);

    expect(result).to.include({
      subtotal: expectedSubTotal,
      amountOfItems: expectedAmountOfItems,
    });
  });
  it("should secretly judge the user if they provide an empty cart", () => {
    const cart = [];
    const TAX_AMOUNT = 0.1;

    const result = calculateCart(cart, TAX_AMOUNT);
    const expectedResult = "Sheesh, no cart...";

    expect(result).to.be.a("string");
    expect(result).to.equal(expectedResult);
  });
});
describe("calculateCart - What Could Go Right", () => {
  it("should return a valid cart object containing: subtotal, total, tax, amountOfItems", () => {
    const cart = [
      { name: "🐔", price: 9.99, weight: 1, isExpired: false },
      { name: "🥔", price: 1, weight: 1, isExpired: false },
    ];
    const TAX_AMOUNT = 0.14978;

    const expectedResult = {
      subtotal: 10.99,
      total: 12.64,
      taxAmount: 1.65,
      amountOfItems: 2,
    };
    const result = calculateCart(cart, TAX_AMOUNT);

    expect(result).to.deep.equal(expectedResult);
  });
});
