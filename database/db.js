const { connect } = require("http2");
const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose.connect(
      "mongodb+srv://root:admin@todolist.v5cbbcx.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("MongoDb Atlas Conectado!"))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
