// eqObj

const obj1 = { a: 1 };
const obj2 = { a: 1 };

const listOfObjs = [obj1, obj2];

console.log(obj1 === obj2);

console.log(obj1 === listOfObjs[0]); // True or false?
