const router = require("express").Router();
// const { sessionChecker } = require("../middleware/session");
const { sessionVariables } = require("../middleware/session");
const Order = require("../models/order");

router
  .route("/")
  .get(sessionVariables, async (req, res) => {
    const listOfOrders = await Order.find();
    res.render("main", { listOfOrders });
  })
  // router.route("/new")
  .post(async (req, res) => {
    let { components, pricePrimary } = req.body;

    const newOrder = new Order({
      number: Math.round(Math.random() * 10000),
      components,
      pricePrimary,
      priceDiscount: Math.floor(pricePrimary * 0.5),
    });

    await newOrder.save();
    res.json(newOrder);
  });

module.exports = router;
