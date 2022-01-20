//FILENAME : db.js

const mongoose = require("mongoose");

// Replace this with your MONGOURI.
const MONGOURI ="mongodb+srv://Ayushi10:Ashi2511@mern10.gv8nd.mongodb.net/node-auth?retryWrites=true&w=majority";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;
