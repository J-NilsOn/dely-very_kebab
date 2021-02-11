const mongoose = require("mongoose");
const mongoose = require("mongoose");

module.exports = mongoose.model("orders", {
  //courier: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  components: String,
  statusBooked: Boolean,
  statusSold: Boolean,
  adress: String,
  pricePrimary: Number,
  priceDiscount: Number,
});
