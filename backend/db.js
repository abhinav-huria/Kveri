require('dotenv').config({ path: '../config.env' });
const mongoose = require("mongoose");

const username = process.env.MONGO_USERNAME
const password = process.env.MONGO_PASSWORD
const cluster = process.env.MONGO_CLUSTER
const dbname = process.env.MONGO_DBNAME

const url = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
