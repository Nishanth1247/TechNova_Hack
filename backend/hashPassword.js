const bcrypt = require("bcrypt");

const password = "123456";

bcrypt.hash(password, 10, (err, hash) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Hashed Password:");
  console.log(hash);
});