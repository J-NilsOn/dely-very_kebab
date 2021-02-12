const router = require("express").Router();
// const { sessionChecker } = require("../middleware/session");
const { sessionVariables } = require("../middleware/session");
const User = require("../models/user");
const Order = require("../models/order");

router.route("/").get(sessionVariables, (req, res) => {
  res.render("main");
});

router.route("/new").post(async (req, res) => {
  let { components, pricePrimary } = req.body;

  const newOrder = new Order({
    components,
    pricePrimary,
    priceDiscount: Math.floor(pricePrimary * 0.5),
  });

  await newOrder.save();
  res.json(newOrder);
});

module.exports = router;
