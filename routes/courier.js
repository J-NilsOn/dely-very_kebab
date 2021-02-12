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
  })
  .delete(async (req, res) => {
    const { id } = req.body;
    try {
      await Order.findByIdAndDelete(id);
      res.status(200).json({ success: true, message: "Deleted" });
    } catch (error) {
      res.status(404).json({ success: false, message: error.message });
    }
  });

module.exports = router;
