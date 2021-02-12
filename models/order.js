const mongoose = require("mongoose");

module.exports = mongoose.model("orders", {
  number: Number,
  components: String,
  statusBooked: { type: Boolean, default: false },
  statusSold: { type: Boolean, default: false },
  adress: { type: [], default: [] },
  pricePrimary: Number,
  priceDiscount: Number,
});
