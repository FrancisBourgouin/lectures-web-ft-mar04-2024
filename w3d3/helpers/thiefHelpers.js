// authenticate a thief

const authenticateThief = (thieves, email, password) => {
  const currentUser = thieves[email];

  if (!currentUser) {
    return { error: "No user with that email", user: null };
  }

  if (currentUser.password !== password) {
    return { error: "Password is not matching", user: null };
  }

  return { error: null, user: currentUser };
};

// authenticateThief(); // Always receive an object, always have two keys; error and user

// const {error, user} = authenticateThief();

// if(error){

// }

// find a thief by email

const fetchThiefByEmail = (thieves, email) => {
  const currentUser = thieves[email];

  if (!currentUser) {
    return { error: "No user with that email", user: null };
  }

  return { error: null, user: currentUser };
};

// create a thief

// admin@localhost

const createThief = (thieves, thiefInfo) => {
  const { error } = fetchThiefByEmail(thieves, thiefInfo.email);

  if (!error) {
    return { error: "OH NO THERE'S A USER ALREADY", user: null };
  }

  // const currentUser = thieves[thiefInfo.email];

  // if (currentUser) {
  //   return { error: "There's a user already", user: null };
  // }

  // if (!name || !email || !password || !imagePath) {
  //   return { error: "One the fields is empty", user: null };
  // }

  const errors = [];
  for (const input in thiefInfo) {
    if (!thiefInfo[input]) {
      errors.push(input);
    }
  }

  if (errors.length) {
    return { error: errors, user: null };
  }

  // const newThief = {
  //   id: Object.keys(thieves).length + 1,
  //   name:thiefInfo.name,
  //   email:thiefInfo.email,
  //   password:thiefInfo.password,
  //   imagePath:thiefInfo.imagePath,
  // };

  const newThief = {
    id: Object.keys(thieves).length + 1,
    ...thiefInfo,
  };

  thieves[email] = newThief;

  return { error: null, user: newThief };
};

module.exports = { authenticateThief, fetchThiefByEmail, createThief };
