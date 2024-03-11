const validateCart = (cart, taxAmount) => {
  const isInvalidCart = !Array.isArray(cart);
  const isInvalidTaxAmount = typeof taxAmount !== "number" || taxAmount < 0;

  if (isInvalidCart) {
    throw new Error("PLEASE PROVIDE A CART YOU DUM DUM");
  }

  if (isInvalidTaxAmount) {
    throw new Error("PLEASE PROVIDE A TAX AMOUNT YOU DUM DUM");
  }

  if (cart.length === 0) {
    return "Sheesh, no cart...";
  }

  return cart.filter((item) => typeof item.price === "number" && item.price >= 0);
};

const roundPrice = (price) => Math.round(price * 100) / 100;

const calculateCart = (cart, taxAmount) => {
  const validCart = validateCart(cart, taxAmount);

  if (typeof validCart === "string") {
    return validCart;
  }

  const output = {
    amountOfItems: validCart.length,
    total: 0,
    subtotal: 0,
    taxAmount: 0,
  };

  for (const item of validCart) {
    output.subtotal += item.price;
  }

  output.taxAmount = roundPrice(output.subtotal * taxAmount);

  output.total = roundPrice(output.taxAmount + output.subtotal);

  return output;
};

module.exports = calculateCart;
