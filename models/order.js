const mongoose = require("mongoose");

module.exports = mongoose.model("orders", {
  components: String,
  statusBooked: Boolean,
  statusSold: Boolean,
  adress: String,
  pricePrimary: Number,
  priceDiscount: Number,
});
