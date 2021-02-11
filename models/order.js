const mongoose = require("mongoose");

module.exports = mongoose.model("orders", {
  components: String,
  statusBooked: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User'
  },
  statusSold: Boolean,
  adress: String,
  pricePrimary: Number,
  priceDiscount: Number,
});
