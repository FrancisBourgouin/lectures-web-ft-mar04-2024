# Shopping Cart !

Takes in an array of items, and will list subtotal, total, tax, amount of items

Cart ?
Item ?

# Data structures (Start with the end of the line)

## Item

```jsx
const item = {
  name: "",
  price: 0,
  weight: 0,
  isExpired: false,
};
```

## Cart

- Array: Very good at being iterated on (.map, .filter, .sort, forEach, )
- Object: Very good at accessing / modifying a specific element

```jsx
const cart = [item, item]; // Simpler!

const cart = { 1: item, 2: item }; // Object.values(cart).map()
```

## CartInformation

```jsx
const someFunction = () => {
  return { value1, value2 };
};

const output = { subtotal, total, tax, amountOfItems };

// const result = [4, 10, 0.15, 10.15]

const result = {
  subtotal: 10,
  total: 10.15,
  tax: 0.15,
  amountOfItems: 4,
};
```

## taxAmount

```jsx
const TAX_AMOUNT = 0.14978;
```

## What if?

```jsx
const calculateCart = (cart, taxAmount) => {
  return output;
};
```

### What could go wrong

- Missing cart (THROW)
- Missing taxAmount (THROW)
- Data format (type) is wrong (THROW)
- Price is wrong (WARN & SKIP)
- Empty cart (WARN)

### What could go right

- They provide a valid cart + valid tax amount and then back a beautiful output object.
