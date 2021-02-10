const mongoose = require("mongoose");

module.exports.dbConnect = () => {
  mongoose.connect("mongodb://localhost:27017/kebab", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
