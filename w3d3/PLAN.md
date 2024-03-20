# Thieve's Den!

Login, then see the content of the vault, unique per user.

## Data

## Thief

id, unique identifier (email), password, name, imagePath

```js
const thief = {
  id: 1,
  email: "",
  name: "",
  password: "",
  imagePath: "",
};
```

## ThiefList

```js
const thievesArr = [thief, thief]; // NO LOVE FOR THE ARRAY :(
const thievesObj = { 1: thief, 2: thief }; // BETTER CHOICE

// Objects are easy to access one element
```

## Seed

```jsx
const thief1 = {
  id:1,
  name:"Arsène Lupin",
  email:"gentleman@cambrioleur.com",
  password:"tophat"
  imagePath:"/images/arsene.gif"
}

const thief2 = {
  id:2,
  name:"Doug Judy",
  email:"pontiac@bandit.com",
  password:"rosa",
  imagePath:"/images/doug.webp"
}


const thieves = {
  "gentleman@cambrioleur.com":thief1,
  "pontiac@bandit.com":thief2
}
```

## Structure

### Helpers!

### HTML
